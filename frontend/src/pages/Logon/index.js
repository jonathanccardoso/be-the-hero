import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import { observable, action } from "mobx";
import { observer } from "mobx-react";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default observer(function Logon() {
  // const [id, setId] = useState("");
  const id = observable.box("");

  const history = useHistory();

  // action(async function handleLogin(e) {
  const handleLogin = action(async function (e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Falha no login, tente novamente.");
      alert(id);
    }
  });

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            data-testid="form-field"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => id.set(e.target.value)}
          />

          <button data-test-id="form-btn" className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
});
