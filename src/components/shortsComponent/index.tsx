import { Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function ShortsComponet () {
    return (
        <Container>
            <ImageBanner src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3a168dd4-810c-467e-9f1a-84cf4c7de5da/d2m5oen-eaa5ebdf-2908-4f9e-affa-3fbec0d48b4c.jpg/v1/fill/w_900,h_507,q_75,strp/palmeiras___bandeira_2_by_panico747_d2m5oen-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA3IiwicGF0aCI6IlwvZlwvM2ExNjhkZDQtODEwYy00NjdlLTlmMWEtODRjZjRjN2RlNWRhXC9kMm01b2VuLWVhYTVlYmRmLTI5MDgtNGY5ZS1hZmZhLTNmYmVjMGQ0OGI0Yy5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7FqsSHaYsBS0vtKo2iHTy7Q-lX9V3vrw0jL0htjUx_8" />
            <TitleContainer>
                <TextContainer>
                    <Title>Atualizações Palestra!</Title>
                    <TextCard>5,3 mil visualizações</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
};

export default ShortsComponet;