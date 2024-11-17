import React, { useContext, useState } from "react"
import Menu from "../../components/menu"
import { AddVideoButton, Buttons, CloseButton, Container, ContainerVideos, InputGroup, Modal, ModalContent, ModalTitle, StudioContainer, SubContainer, UserName } from "./styles"
import Header from "../../components/header"
import { UserContext } from "../../context/userContext"
import StudioComponent from "../../components/studioComponent"
import { useMenuContext } from "../../context/menuContext"

function Studio() {

  interface Videos {
    id: string;
    videoTitle: string;
    imageUrl: string;
    post_time: string
  }

  const [loading, setLoading] = useState(false);
  const [hideModal, setHideModal] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [imageUrlError, setImageUrlError] = useState<string | null>(null);
  const [videoTitleError, setVideoTitleError] = useState<string | null>(null);
  const [videoDescriptionError, setVideoDescriptionError] = useState<string | null>(null);
  const { token, user, userVideos, createVideos } = useContext(UserContext);
  const { menuSize } = useMenuContext();
  const userID = user.id;

  const isValidImageUrl = (url: string) => /\.(jpeg|jpg|gif|png|bmp|webp|svg)$/.test(url);
  const isValidTitle = (title: string) => title.length >= 5 && title.length <= 100;
  const isValidDescription = (description: string) => description.length >= 10 && description.length <= 500;

  const validateForm = () => {
    let isValid = true;

    if(!isValidImageUrl(imageUrl)){
      setImageUrlError('Por favor, insira uma URL válida de imagem (jpeg, jpg, png, gif, etc.).');
      isValid = false;
    } else {
      setImageUrlError(null);
    }

    if(!isValidTitle(videoTitle)){
      setVideoTitleError('O título deve ter entre 5 e 100 caracteres.');
      isValid = false;
    } else {
      setVideoTitleError(null);
    }

    if(!isValidDescription(videoDescription)){
      setVideoDescriptionError('A descrição deve ter entre 10 e 500 caracteres.');
      isValid = false;
    } else {
      setVideoDescriptionError(null);
    }

    //Validação de palavras proibidas
    const forbiddenWords = ["spam", "offensive"]; //Listar palavras aqui
    forbiddenWords.forEach(word => {
      if(videoTitle.includes(word)){
        setVideoTitleError(`O título contém palavras ofensivas: ${word}.`);
        isValid = false;
      }

      if(videoDescription.includes(word)){
        setVideoDescriptionError(`A descrição contém palavras ofensivas: ${word}.`);
        isValid = false;
      }
    });
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const post_time: Date = new Date();

    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    setLoading(true);

    try {
        await createVideos(token, userID, videoTitle, videoDescription, imageUrl, post_time);
    } catch (error) {
        alert('Erro ao criar vídeo, tente novamente mais tarde.');
        console.error('Erro ao criar vídeo:', error);
    } finally {
        setLoading(false);
    }
};  

  const closeModal = () => {
    setHideModal(true)
  };

  function getTimeDifference(post_time: string): string {
    const diff = Date.now() - Date.parse(post_time);
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 12 * month;

    if (diff < minute * 5) {
      return "Agora";
    } else if (diff < hour) {
      const minutes = Math.floor(diff / minute);
      return `Há ${minutes} ${minutes < 2 ? "minuto" : "minutos"}`;
    } else if (diff < day) {
      const hours = Math.floor(diff / hour);
      return `Há ${hours} ${hours < 2 ? "hora" : "horas"}`;
    } else if (diff < week) {
      const days = Math.floor(diff / day);
      return `Há ${days} ${days < 2 ? "dia" : "dias"}`;
    } else if (diff < month) {
      const weeks = Math.floor(diff / week);
      return `Há ${weeks} ${weeks < 2 ? "semana" : "semanas"}`;
    } else if (diff < year) {
      const months = Math.floor(diff / month);
      return `Há ${months} ${months < 2 ? "mês" : "meses"}`;
    } else {
      const years = Math.floor(diff / year);
      return `Há ${years} ${years < 2 ? "ano" : "anos"}`;
    }
  };

  return (
    <StudioContainer>   
      <Header />
      <SubContainer>
        <Menu />
        <Container>
          <UserName>{user && user.name ? user.name : 'Erro ao buscar nome!'}</UserName>
          <AddVideoButton onClick={() => setHideModal(false)}>cadastrar video</AddVideoButton>
          <Modal hideModal={hideModal}>
            <ModalContent>
              <CloseButton onClick={closeModal}>X</CloseButton>
              <ModalTitle>Enviar novo vídeo</ModalTitle>
              <form onSubmit={handleSubmit}>
                <InputGroup>
                  <label htmlFor="url">URL do vídeo</label>              
                  <input
                    id="url"
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                  />
                  {imageUrlError && <span style={{ color: 'red' }}>{imageUrlError}</span>}

                  <label htmlFor="title">Título do vídeo</label>
                  <input
                    id="title"
                    type="text"
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                    required
                  />
                  {videoTitleError && <span style={{ color: 'red' }}>{videoTitleError}</span>}

                  <label htmlFor="description">Descrição do vídeo</label>
                  <input
                    id="description"
                    type="text"
                    value={videoDescription}
                    onChange={(e) => setVideoDescription(e.target.value)}
                    required
                  />
                  {videoDescriptionError && <span style={{ color: 'red' }}>{videoDescriptionError}</span>}
                </InputGroup>
                <Buttons>
                  <div>
                    <button className="enter" type="submit" disabled={loading}>Adicionar video</button>
                  </div>
                </Buttons>
              </form>
            </ModalContent>
          </Modal>
          <ContainerVideos menuSize={menuSize}>
            {Array.isArray(userVideos) ? (
              userVideos.length > 0 ? (
                userVideos.map((video: Videos) => (
                  <StudioComponent
                    thumbnail={video.imageUrl}
                    title={video.videoTitle}
                    channelName={user && user.name ? user.name : 'Erro ao buscar nome!'}
                    details={getTimeDifference(video.post_time)}
                    key={video.id}
                  />
                ))
              ) : (
                <h1>Esse canal não possui vídeos</h1>
              )
            ) : (
              <h1>Esse canal não possui vídeos</h1>
            )}
          </ContainerVideos>
        </Container>
      </SubContainer>
    </StudioContainer>
  )
}

export default Studio;