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
          <h1 className="page-title">Perfil do Usuário e Configurações</h1>
          
          <section className="form-section">
            <h2 className="section-title">Meus Dados</h2>
            <form className="form-perfil">
              <div className="form-group">
                <label htmlFor="nomeUsuario">Nome Completo:</label>
                <input type="text" id="nomeUsuario" name="nomeUsuario" placeholder="Seu nome" />
              </div>
              <div className="form-group">
                <label htmlFor="nomeNegocio">Nome do Negócio/Empreendimento:</label>
                <input type="text" id="nomeNegocio" name="nomeNegocio" placeholder="Ex: Maria Doces Artesanais" />
              </div>
              <div className="form-group">
                <label htmlFor="emailUsuario">E-mail de Contato:</label>
                <input type="email" id="emailUsuario" name="emailUsuario" placeholder="seuemail@exemplo.com" />
              </div>
              {/* <div className="form-group">
                <label htmlFor="senhaAtual">Senha Atual (para alteração):</label>
                <input type="password" id="senhaAtual" name="senhaAtual" />
              </div>
              <div className="form-group">
                <label htmlFor="novaSenha">Nova Senha:</label>
                <input type="password" id="novaSenha" name="novaSenha" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmarNovaSenha">Confirmar Nova Senha:</label>
                <input type="password" id="confirmarNovaSenha" name="confirmarNovaSenha" />
              </div> */}
              <button type="submit" className="btn-submit">Salvar Alterações</button>
            </form>
          </section>

          <section className="preferencias-section">
            <h2 className="section-title">Preferências do Sistema</h2>
            <div className="form-group">
              <label htmlFor="temaApp">Tema do Aplicativo:</label>
              <select id="temaApp" name="temaApp">
                <option value="claro">Claro (Padrão)</option>
                <option value="escuro">Escuro (Em breve)</option>
              </select>
            </div>
            <div className="form-group">
                <label>Notificações:</label>
                <div className="checkbox-group">
                    <input type="checkbox" id="notifEmail" name="notifEmail" defaultChecked/>
                    <label htmlFor="notifEmail">Receber resumos por e-mail</label>
                </div>
                 <div className="checkbox-group">
                    <input type="checkbox" id="notifPush" name="notifPush" />
                    <label htmlFor="notifPush">Receber notificações push (Em breve)</label>
                </div>
            </div>
             <button type="button" className="btn-secondary">Salvar Preferências</button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default PerfilPage;
