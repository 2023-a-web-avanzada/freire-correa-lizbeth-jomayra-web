import {App, BlockTitle, List, ListItem, Navbar, Page} from "konsta/react";
import {Button} from "@mui/material";

export default function EjemploKonsta() {
    return(
        <>
            <App theme="material">
                <Page>
                    <Navbar title="List"></Navbar>
                    <BlockTitle> Links, Header, Footer</BlockTitle>
                    <List strongIos outlineIos>
                        <ListItem
                            link
                            header={
                                <Button variant='outlined'>Hola Mui</Button>
                            }
                            title="John Doe"
                            after="Edit"
                        ></ListItem>
                    </List>
                </Page>
            </App>
        </>
    )
}