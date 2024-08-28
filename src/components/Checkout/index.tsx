import { useDispatch, useSelector } from "react-redux";
import { Overlay, Sidebar } from "../Cart/style";
import {
  Button,
  Buttons,
  CheckoutContainer,
  ConfirmContainer,
  DeliveryContainer,
  Field,
  PaymentContainer,
  Row,
  TextContainer,
  TwoFields,
} from "./style";
import { RootReducer } from "../../redux/store";
import {
  openCart,
  openDelivery,
  openPayment,
  Confirmation,
  closeCart,
  openConfirmation,
} from "../../redux/reducers/cart";

import { useFormik } from "formik";
import * as Yup from "yup";

import { IMaskInput } from "react-imask";
import { usePurchaseMutation } from "../../service/api";
import { formataPreco } from "../Food";
import { useEffect } from "react";

type Props = {
  totalPrice: number;
};

const Checkout = ({ totalPrice }: Props) => {
  const dispatch = useDispatch();

  const [purchase, { isSuccess, data }] = usePurchaseMutation();

  const { visibleConfirmation, visibleDelivery, visiblePayment, items } =
    useSelector((state: RootReducer) => state.cart);

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;

    if (isInvalid && isTouched) return (message = `* ${message}`);

    return (message = "");
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(openConfirmation());
      form.values.Cardname = "";
      form.values.address = "";
      form.values.cep = "";
      form.values.city = "";
      form.values.complement = "";
      form.values.cvv = "";
      form.values.expirantionYear = "";
      form.values.expirationMonth = "";
      form.values.fullname = "";
      form.values.numberAddress = "";
      form.values.numberCard = "";
    }
  }, [isSuccess]);

  const form = useFormik({
    initialValues: {
      fullname: "",
      address: "",
      city: "",
      cep: "",
      numberAddress: "",
      complement: "",

      Cardname: "",
      numberCard: "",
      cvv: "",
      expirationMonth: "",
      expirantionYear: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(5, "O campo precisa ter pelo menos 5 caracteres")
        .required("Campo obrigatório"),

      address: Yup.string()
        .min(5, "O campo precisa ter pelo menos 5 caracteres")
        .required("Campo obrigatório"),

      city: Yup.string()
        .min(3, "O campo precisa ter pelo menos 3 caracteres")
        .required("Campo obrigatório"),

      cep: Yup.string()
        .min(10, "O campo precisa ter 10 caracteres")
        .max(10, "O campo precisa ter 10 caracteres")
        .required("Campo obrigatório"),

      numberAddress: Yup.string()
        .min(2, "O campo precisa ter pelo menos 2 caracteres")
        .max(4, "O campo precisa ter no máximo 4 caracteres")
        .required("Campo obrigatório"),

      Cardname: Yup.string().when((_, schema) =>
        visiblePayment ? schema.required("O campo é obrigatório") : schema
      ),
      numberCard: Yup.string()
        .when((_, schema) =>
          visiblePayment ? schema.required("O campo é obrigatório") : schema
        )
        .min(19, "O campo precisa ter pelo menos 19 caracteres")
        .max(19, "O campo precisa ter no máximo 19 caracteres"),
      cvv: Yup.string()
        .when((_, schema) =>
          visiblePayment ? schema.required("O campo é obrigatório") : schema
        )
        .max(3, "O campo precisa ter no máximo 3 caracteres"),
      expirationMonth: Yup.string()
        .when((_, schema) =>
          visiblePayment ? schema.required("O campo é obrigatório") : schema
        )
        .max(2, "O campo precisa ter no máximo 5 caracteres")
        .min(2, "O campo precisa ter no mínimo 5 caracteres"),
      expirantionYear: Yup.string()
        .when((_, schema) =>
          visiblePayment ? schema.required("O campo é obrigatório") : schema
        )
        .max(4, "O campo precisa ter no máximo 4 caracteres")
        .min(4, "O campo precisa ter no mínimo 4 caracteres"),
    }),
    onSubmit: (values) => {
      purchase({
        products: [{ id: 1, price: 100 }],
        delivery: {
          address: {
            city: values.city,
            description: values.address,
            number: Number(values.numberAddress),
            zipCode: values.cep,
            complement: values.complement,
          },
          receiver: values.fullname,
        },
        payment: {
          card: {
            code: Number(values.cvv),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirantionYear),
            },
            name: values.Cardname,
            number: values.numberCard,
          },
        },
      });
    },
  });

  const handlePayment = () => {
    if (
      form.values.fullname &&
      form.values.address &&
      form.values.city &&
      form.values.cep &&
      form.values.numberAddress
    ) {
      if (items.length === 0) {
        alert("Insira um produto no carrinho!");
      } else {
        dispatch(openPayment());
      }
    } else {
      alert("Preencha todos os campos!");
    }
  };
  const handleCart = () => dispatch(openCart());
  const handleDelivery = () => dispatch(openDelivery());

  const handleCheckout = () => {
    let checkoutVisible = false;
    if (visibleConfirmation || visibleDelivery || visiblePayment) {
      checkoutVisible = true;
    }
    return checkoutVisible;
  };

  const closeCartAll = () => dispatch(Confirmation());
  return (
    <CheckoutContainer className={handleCheckout() ? "is-open" : ""}>
      <Overlay onClick={() => dispatch(closeCart())} />
      <Sidebar>
        <form onSubmit={form.handleSubmit}>
          <DeliveryContainer className={visibleDelivery ? "is-open" : ""}>
            <h3>Entrega</h3>
            <Row>
              <label htmlFor="fullname">Quem irá receber</label>
              <input
                type="text"
                id="fullname"
                value={form.values.fullname}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{` ${getErrorMessage(
                "fullname",
                form.errors.fullname
              )}`}</small>
            </Row>
            <Row>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{` ${getErrorMessage(
                "address",
                form.errors.address
              )}`}</small>
            </Row>
            <Row>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{` ${getErrorMessage("city", form.errors.city)}`}</small>
            </Row>
            <TwoFields>
              <Field>
                <label htmlFor="cep">CEP</label>
                <IMaskInput
                  mask="00.000-000"
                  type="text"
                  id="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{` ${getErrorMessage("cep", form.errors.cep)}`}</small>
              </Field>
              <Field>
                <label htmlFor="numberAddress">Número</label>
                <input
                  type="text"
                  id="numberAddress"
                  value={form.values.numberAddress}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {` ${getErrorMessage(
                    "numberAddress",
                    form.errors.numberAddress
                  )}`}{" "}
                </small>
              </Field>
            </TwoFields>
            <Row>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </Row>

            <Buttons>
              <Button type="button" onClick={handlePayment}>
                Continuar com o pagamento
              </Button>
              <Button type="button" onClick={handleCart}>
                Voltar para o carrinho
              </Button>
            </Buttons>
          </DeliveryContainer>

          <PaymentContainer className={visiblePayment ? "is-open" : ""}>
            <h3>Pagamento - Valor a pagar {formataPreco(totalPrice)}</h3>{" "}
            <Row>
              <label htmlFor="Cardname">Nome no cartão</label>
              <input
                type="text"
                id="Cardname"
                value={form.values.Cardname}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{` ${getErrorMessage(
                "Cardname",
                form.errors.Cardname
              )}`}</small>
            </Row>
            <TwoFields>
              <Field>
                <label htmlFor="numberCard">Número do cartão</label>
                <IMaskInput
                  mask="0000.0000.0000.0000"
                  type="text"
                  id="numberCard"
                  value={form.values.numberCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {`${getErrorMessage("numberCard", form.errors.numberCard)}`}
                </small>
              </Field>
              <Field>
                <label htmlFor="cvv">CVV</label>
                <IMaskInput
                  mask="000"
                  type="text"
                  id="cvv"
                  value={form.values.cvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{` ${getErrorMessage("cvv", form.errors.cvv)}`}</small>
              </Field>
            </TwoFields>
            <TwoFields>
              <Field>
                <label htmlFor="expirationMonth">Mês de vencimento</label>
                <IMaskInput
                  mask="00"
                  type="text"
                  id="expirationMonth"
                  value={form.values.expirationMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{` ${getErrorMessage(
                  "expirationMonth",
                  form.errors.expirationMonth
                )}`}</small>
              </Field>
              <Field>
                <label htmlFor="expirantionYear">Ano de vencimento</label>
                <IMaskInput
                  mask="0000"
                  type="text"
                  id="expirantionYear"
                  value={form.values.expirantionYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {` ${getErrorMessage(
                    "expirantionYear",
                    form.errors.expirantionYear
                  )}`}
                </small>
              </Field>
            </TwoFields>
            <Buttons>
              <Button type="submit">Finalizar pagamento</Button>
              <Button onClick={handleDelivery}>
                Voltar para a edição de endereço
              </Button>
            </Buttons>
          </PaymentContainer>

          <ConfirmContainer className={visibleConfirmation ? "is-open" : ""}>
            {isSuccess && (
              <>
                <h3>{`Pedido realizado - ${data.orderId}`}</h3>

                <TextContainer>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.{" "}
                  </p>
                  <p>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>

                  <p>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                </TextContainer>

                <Buttons>
                  <Button type="button" onClick={closeCartAll}>
                    Concluir
                  </Button>
                </Buttons>
              </>
            )}
          </ConfirmContainer>
        </form>
      </Sidebar>
    </CheckoutContainer>
  );
};

export default Checkout;
