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

const Checkout = () => {
  return (
    <CheckoutContainer>
      <Overlay />
      <Sidebar>
        <DeliveryContainer className="">
          <h3>Entrega</h3>
          <Row>
            <label htmlFor="fullname">Quem irá receber</label>
            <input type="text" id="fullname" />
          </Row>
          <Row>
            <label htmlFor="address">Endereço</label>
            <input type="text" id="address" />
          </Row>
          <Row>
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" />
          </Row>
          <TwoFields>
            <Field>
              <label htmlFor="cep">CEP</label>
              <input type="text" id="cep" />
            </Field>
            <Field>
              <label htmlFor="numberAddress">Número</label>
              <input type="text" id="numberAddress" />
            </Field>
          </TwoFields>
          <Row>
            <label htmlFor="city">Complemento (opcional)</label>
            <input type="text" id="city" />
          </Row>

          <Buttons>
            <Button>Continuar com o pagamento</Button>
            <Button>Voltar para o carrinho</Button>
          </Buttons>
        </DeliveryContainer>

        <PaymentContainer className="">
          <h3>Pagamento - Valor a pagar R$ 190,90</h3>
          <Row>
            <label htmlFor="Cardname">Nome no cartão</label>
            <input type="text" id="Cardname" />
          </Row>

          <TwoFields>
            <Field>
              <label htmlFor="numberCard">Número do cartão</label>
              <input type="text" id="numberCard" />
            </Field>
            <Field>
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" />
            </Field>
          </TwoFields>
          <TwoFields>
            <Field>
              <label htmlFor="expirationMonth">Mês de vencimento</label>
              <input type="text" id="expirationMonth" />
            </Field>
            <Field>
              <label htmlFor="expirantionYear">Ano de vencimento</label>
              <input type="text" id="expirantionYear" />
            </Field>
          </TwoFields>
          <Buttons>
            <Button>Finalizar pagamento</Button>
            <Button>Voltar para a edição de endereço</Button>
          </Buttons>
        </PaymentContainer>

        <ConfirmContainer className="is-open">
          <h3>Pedido realizado - 12345</h3>

          <TextContainer>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.{" "}
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>

            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </TextContainer>

          <Buttons>
            <Button>Concluir</Button>
          </Buttons>
        </ConfirmContainer>
      </Sidebar>
    </CheckoutContainer>
  );
};

export default Checkout;
