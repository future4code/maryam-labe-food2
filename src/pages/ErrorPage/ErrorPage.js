import React from "react"
import { useHistory } from "react-router"
import { ErrorPageContainer } from "./style"
import { Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { goToHome } from "../../routes/coordinator"

const ErrorPage = () => {
    const history = useHistory();

    return (
        <ErrorPageContainer>
            <Typography
                color={"neutral"}
                variant={"h1"}
                align={"center"}
                gutterBottom={true}
            >
                <strong>Ops!</strong>
            </Typography>
            <Typography
                color={"neutral"}
                variant={"overline"}
                align={"center"}
                gutterBottom={true}
            >
                Página não encontrada!
            </Typography>
            <Typography
                color={"neutral"}
                variant={"body1"}
                align={"center"}
                gutterBottom={true}
            >
                Parece que houve um erro com a página procurada. É possível que a página
                tenha sido removida ou o endereço não exista.
            </Typography>
            <div>
                <Button
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    onClick={() => goToHome(history)}
                >
                    Voltar para a página Inicial
                </Button>
            </div>
        </ErrorPageContainer>
    );
};

export default ErrorPage
