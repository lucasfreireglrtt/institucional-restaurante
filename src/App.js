import React from 'react';
import { Utensils, Clock, MapPin, Phone, Share2} from 'lucide-react';
import './App.css';

const MenuItem = ({ nome, preco, descricao }) => (
  <div className="menu-item">
    <div className="item-info">
      <h3>{nome}</h3>
      <p>{descricao}</p>
    </div>
    <span className="price">{preco}</span>
  </div>
);

function App() {
  const pratos = [
  // ENTRADAS
  { categoria: "Entradas", nome: "Bruschetta de Parma", preco: "R$ 42", descricao: "Pão de fermentação natural, presunto di parma, rúcula e mel silvestre." },
  { categoria: "Entradas", nome: "Dadinhos de Tapioca", preco: "R$ 36", descricao: "Servidos com geleia de pimenta defumada artesanal." },
  { categoria: "Entradas", nome: "Tartare de Atum", preco: "R$ 58", descricao: "Atum fresco, avocado, chips de mandioquinha e redução de balsâmico." },

  // PRINCIPAIS
  { categoria: "Principais", nome: "Risoto de Cogumelos", preco: "R$ 72", descricao: "Mix de cogumelos sazonais, arroz arbóreo e azeite de trufas brancas." },
  { categoria: "Principais", nome: "Entrecôte ao Poivre", preco: "R$ 94", descricao: "Corte nobre grelhado com molho de pimentas e batatas rústicas." },
  { categoria: "Principais", nome: "Gnocchi de Mandioquinha", preco: "R$ 68", descricao: "Ao molho de queijo brie com nozes caramelizadas e sálvia." },
  { categoria: "Principais", nome: "Polvo Grelhado", preco: "R$ 110", descricao: "Tentáculos de polvo, arroz negro cremoso e aioli de páprica." },

  // SOBREMESAS
  { categoria: "Sobremesas", nome: "Panna Cotta de Baunilha", preco: "R$ 32", descricao: "Creme de baunilha Bourbon com calda artesanal de frutas vermelhas." },
  { categoria: "Sobremesas", nome: "Petit Gâteau de Pistache", preco: "R$ 38", descricao: "Recheio cremoso de pistache servido com sorvete de fava de baunilha." }
];

  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="logo">LUCAS'S</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Cardápio</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Reservas</a>
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="hero-content">
          <span className="badge">Gastronomia Autêntica</span>
          <h2>Experiência sensorial em cada detalhe.</h2>
          <p>Cozinha contemporânea com ingredientes orgânicos e ambiente acolhedor.</p>
          <br /><br />
          <a href="#menu" className="btn-primary">Ver Cardápio</a>
        </div>
      </header>

      <section id="menu" className="section">
        <div className="section-header">
          <h2>Nosso Cardápio</h2>
          <div className="divider"></div>
        </div>
        <div className="menu-grid">
          {pratos.map((item, index) => (
            <MenuItem 
              key={index} 
              nome={item.nome} 
              preco={item.preco} 
              descricao={item.descricao} 
            />
          ))}
        </div>
      </section>

      <section id="sobre" className="section bg-light">
        <div className="about-container">
          <div className="about-text">
            <h2>Nossa História</h2>
            <p>
              Nascemos da paixão por transformar ingredientes simples em memórias inesquecíveis. 
              No coração da cidade, oferecemos um refúgio para quem busca alta gastronomia 
              sem perder o conforto de casa.
            </p>
            <div className="stats">
              <div><strong>10+</strong> <span>Anos de História</span></div>
              <div><strong>100%</strong> <span>Orgânico</span></div>
            </div>
          </div>
          <div className="about-img">
            <img src="ambiente.jpg" alt="Ambiente" className="img-fluid" />
          </div>
        </div>
      </section>

      <footer id="contato" className="footer">
        <div className="footer-grid">
          <div className="footer-info">
            <h3>Reservas</h3>
            <p><Phone size={18} /> (11) 9999-9999</p>
            <p><MapPin size={18} /> Rua da Gastronomia, 123 - SP</p>
            <p><Clock size={18} /> Ter - Dom: 19h às 23h</p>
          </div>
          <div className="footer-form">
            <input type="text" placeholder="Seu Nome" />
            <input type="email" placeholder="Seu Email" />
            <button className="btn-secondary">Solicitar Reserva</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Lucas's Bistro. Todos os direitos reservados.</p>
          <Share2 size={20} className="icon-link" /> 
        </div>
      </footer>
    </div>
  );
}

export default App;