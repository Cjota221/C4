import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function PerfilPage() {
  return (
    <div className="page-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main className="page-content perfil-page">
          <h1 className="titulo-pagina">Meu Perfil e Configurações</h1>
          
          <section className="form-container dados-pessoais">
            <h2 className="subtitulo-secao">Dados do Usuário</h2>
            <form className="formulario-perfil">
              <div className="input-group">
                <label htmlFor="nomeUsuario">Nome Completo:</label>
                <input type="text" id="nomeUsuario" name="nomeUsuario" className="input-campo" placeholder="Seu nome completo" defaultValue="Empreendedora C4" />
              </div>
              <div className="input-group">
                <label htmlFor="emailUsuario">E-mail:</label>
                <input type="email" id="emailUsuario" name="emailUsuario" className="input-campo" placeholder="seuemail@exemplo.com" defaultValue="contato@c4app.com.br" />
              </div>
              <div className="input-group">
                <label htmlFor="nomeLoja">Nome da Loja/Negócio:</label>
                <input type="text" id="nomeLoja" name="nomeLoja" className="input-campo" placeholder="Ex: C4 Store" defaultValue="C4 App Revendas" />
              </div>
              <button type="button" className="botao-primario btn-salvar-dados">Salvar Dados Pessoais</button>
            </form>
          </section>

          <section className="form-container preferencias-sistema">
            <h2 className="subtitulo-secao">Preferências do Sistema</h2>
            <form className="formulario-preferencias">
              <div className="input-group">
                <label htmlFor="temaApp">Tema Visual:</label>
                <select id="temaApp" name="temaApp" className="input-campo">
                  <option value="claro">Claro (Padrão)</option>
                  <option value="escuro" disabled>Escuro (Em breve)</option>
                </select>
              </div>
              <div className="input-group">
                <label>Notificações por E-mail:</label>
                <div className="checkbox-opcao">
                  <input type="checkbox" id="notifResumoSemanal" name="notifResumoSemanal" defaultChecked />
                  <label htmlFor="notifResumoSemanal" className="label-checkbox">Receber resumo financeiro semanal</label>
                </div>
                <div className="checkbox-opcao">
                  <input type="checkbox" id="notifNovidades" name="notifNovidades" />
                  <label htmlFor="notifNovidades" className="label-checkbox">Receber novidades e dicas do C4 App</label>
                </div>
              </div>
               {/* <div className="input-group">
                <label htmlFor="alterarSenha">Alterar Senha:</label>
                <input type="password" id="senhaAtual" name="senhaAtual" className="input-campo" placeholder="Senha Atual" />
                <input type="password" id="novaSenha" name="novaSenha" className="input-campo" placeholder="Nova Senha" style={{marginTop: '10px'}} />
                <input type="password" id="confirmarNovaSenha" name="confirmarNovaSenha" className="input-campo" placeholder="Confirmar Nova Senha" style={{marginTop: '10px'}} />
              </div> */}
              <button type="button" className="botao-primario btn-salvar-preferencias">Salvar Preferências</button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}

export default PerfilPage;
