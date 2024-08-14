import {
  Card,
  Button,
  Title,
  Description,
  Modal,
  ModalContent,
  ModalInfo,
  CloseIcon,
} from "./style";

import close from "../../assets/images/close.png";
import { useState } from "react";
import { CardapioType } from "../../pages/Home";
import { useDispatch } from "react-redux";
import { addItem, openCart } from "../../redux/reducers/cart";

type Props = {
  food: CardapioType;
};

// eslint-disable-next-line react-refresh/only-export-components
export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

const getDescricao = (descricao: string) => {
  if (descricao.length > 150) {
    return descricao.slice(0, 150) + "...";
  }
  return descricao;
};

const Food = ({ food }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const dispatch = useDispatch();

  const addProductCart = (item: CardapioType) => dispatch(addItem(item));

  return (
    <>
      <Card>
        <img src={food.foto} alt="Comida" />
        <Title>{food.nome}</Title>
        <Description>{getDescricao(food.descricao)}</Description>
        <Button onClick={() => closeModal()}>Mais detalhes</Button>
      </Card>
      <Modal className={showModal ? "isVisible" : ""}>
        <ModalContent>
          <img src={food.foto} alt="" />
          <ModalInfo>
            <h4>{food.nome}</h4>
            <p>
              {food.descricao}
              <span>{food.porcao}</span>
            </p>
            <button
              onClick={() => {
                addProductCart(food);
                dispatch(openCart());
                closeModal();
              }}
            >{`Adicionar ao carrinho - ${formataPreco(food.preco)}`}</button>
          </ModalInfo>
          <CloseIcon
            src={close}
            alt="Icone de fechar"
            onClick={() => closeModal()}
          />
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  );
};

export default Food;
