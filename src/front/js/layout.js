import React from "react";
import injectContext from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";
import CancelPlan from "./pages/CancelPlan";
import PerfilCliente from "./pages/PerfilCliente";
import UploadClientProgram from "./pages/UploadClientProgram";
import EntrenadorCLIENTE from "./pages/EntrenadorCLIENTE";
import VistaEntrenador from "./pages/VistaEntrenador";
import UpdateProgress from "./pages/UpdateProgress";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import UploadClientProgram from "./pages/UploadClientProgram";
import EntrenadorCLIENTE from "./pages/EntrenadorCLIENTE";
import injectContext from "./store/appContext";

import VistaEntrenador from "./pages/VistaEntrenador";

import UpdateProgress from "./pages/UpdateProgress";
import CancelPlan from "./pages/CancelPlan";
import { Register } from "./pages/register";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import { LandingPage } from "./pages/landingPage";
import { RegisterData } from "./pages/registerData";
import { HomeTrainer } from "./pages/homeTrainer";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<LandingPage />} path="/" />
                        <Route element={<Home />} path="/home" />
                        <Route element={<HomeTrainer />} path="/homeTrainer" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<RegisterData />} path="/registerData" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />

                        <Route element={<UploadClientProgram/>} path="/upload-client-program"/>
                        <Route element={<EntrenadorCLIENTE/>} path="/trainer/cliente"/>
                        <Route element={<VistaEntrenador/>} path="/trainer"/>

                        <Route element={<UpdateProgress/>} path="/PerfilCliente/updateProgress"/>
                        <Route element={<CancelPlan/>} path="/perfilcliente/Cancelplan"/>
                        <Route element={<PerfilCliente/>} path="/PerfilCliente"/>


                        <Route element={<UploadClientProgram/>} path="/upload-client-program"/>
                        <Route element={<EntrenadorCLIENTE/>} path="/trainer/cliente"/>
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
