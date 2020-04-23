import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { observable, action } from "mobx";
import { observer } from "mobx-react";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default observer(function NewIncident() {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [value, setValue] = useState("");
  const title = observable.box("");
  const description = observable.box("");
  const value = observable.box("");

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  // async function handleNewIncident(e) {
  const handleNewIncident = action(async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push("/profile");
    } catch (err) {
      alert("Erro ao cadastrar caso, tente novamente.");
    }
  });

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={(e) => title.set(e.target.value)}
          />

          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => description.set(e.target.value)}
          />

          <input
            placeholder="Valor em reais"
            value={value}
            // onChange={(e) => setValue(e.target.value)}
            onChange={(e) => value.set(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
});
