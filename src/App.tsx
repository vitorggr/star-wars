import { useEffect, useState } from "react";
import { genericController, PageData } from "./api/generic-api";
import { Film } from "./api/schemas/film";
import { People } from "./api/schemas/people";
import {Detalhe} from  "./components/detalhe/detalhe";
import "./styles.css";

export const App = () => {

      return(
        <Detalhe<Film> id={1} controller="films"/>
      )
};
