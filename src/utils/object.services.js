import capa_manutencao from '../images/img-services/manutencao.webp';
import capa_remodelacao from '../images/img-services/remodelacao.webp';
import capa_eletrica from '../images/img-services/eletrica.webp';
import capa_hidraulica from '../images/img-services/hidraulica.webp';
import capa_pintura from '../images/img-services/pintura.webp';
import capa_drywall from '../images/img-services/drywall.webp';
import capa_arcond from '../images/img-services/arcond.webp';

import icon_manu from '../images/img-icon-service/manutencao.webp';
import icon_remo from '../images/img-icon-service/remodelacao.webp';
import icon_ele from '../images/img-icon-service/eletrica.webp';
import icon_hidra from '../images/img-icon-service/hidraulica.webp';
import icon_pint from '../images/img-icon-service/pintura.webp';
import icon_dry from '../images/img-icon-service/drywall.webp';
import icon_arcond from '../images/img-icon-service/arcond.webp';

const arcond = require.context('../images/img-services/arcond', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const drywall = require.context('../images/img-services/drywall', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const eletrica = require.context('../images/img-services/eletrica', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const hidraulica = require.context('../images/img-services/hidraulica', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const manutencao = require.context('../images/img-services/manutencao', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const pintura = require.context('../images/img-services/pintura', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const remodelacao = require.context('../images/img-services/remodelacao', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);

const services = [
  {
    id: 0,
    pathName: 'tabalhos-em-altura',
    icon: icon_manu,
    cover: capa_manutencao,
    title: 'Adesivação',
    resumo: 'Plotagem de adesivo é uma película adesiva em vinil impressa com imagens em dimensões ampliadas, normalmente fabricada em PVC.',
    text: 'A Art Toldos executa a plotagem de adesivo e aplicação de adesivo em fachadas, decoração de ambientes empresariais e comércios, automóveis e frotas de veículos.',
    servicos: [],
    images: manutencao,
  },
  {
    id: 1,
    pathName: 'remodelacao',
    icon: icon_remo,
    cover: capa_remodelacao,
    title: 'Fabricação de Letra Caixa e Logomarca ',
    resumo: 'A letra caixa também conhecida por letra 3D ou letra em alto relevo proporciona destaque a sua marca, deixando seu estabelecimento em evidência. ',
    text: 'O logotipo em letra caixa pode ser confeccionado em vários tamanhos e na cor de sua preferência e pode ser aplicada em fachadas, recepções e paredes internas e externas de empresas ou eventos.',
    
    servicos: [],
    images: remodelacao,
  },
  {
    id: 2,
    pathName: 'eletrica',
    icon: icon_ele,
    cover: capa_eletrica,
    title: 'Fachada em ACM',
    resumo: 'Possibilita fachadas mais evidentes e personalizados com a marca do cliente. ',
    text: 'O ACM é um material versátil e com uma grande variedade de cores e possibilidades, entre elas a aplicação de LED, texturas e formatos.A manutenção da fachada em ACM é bem simples, sendo necessário apenas uma limpeza com água e detergente neutro sob o material semanalmente, ou quando ocorrer o acúmulo de sujeira.',
    servicos: [
     
    ],
    images: eletrica,
  },
  {
    id: 3,
    pathName: 'hidraulica',
    icon: icon_hidra,
    cover: capa_hidraulica,
    title: 'Toldos',
    resumo: 'Protege do sol da chuva e da mais privacidade ao ambiente..',
    text: 'Coberturas de policarbonato. Toldo em policarbonato com estrutura de alumínio com pintura eletrostática.Toldos Fixos na Grande Florianópolis, Estrutura de ferro com pintura automotivo e lona translúcida.Toldos Articulados acionamento por manivela',
    servicos: [
      
    ],
    images: hidraulica,
  },
  {
    id: 4,
    pathName: 'pintura',
    icon: icon_pint,
    cover: capa_pintura,
    title: 'Fabricação de Totem',
    resumo: ' O totem é ideal para compor fachadas de estabelecimentos e empresas, pois atraem maior atenção de potenciais clientes',
    text: 'O totem pode ser fabricado em vários modelos e formatos. Modelos mais modernos podem ser luminosos, compostos por luz de led interna ou externa.O material é escolhido de acordo com o projeto e objetivo do cliente, podendo ser de ACM ou acrílico. ',
    servicos: [
    ],
    images: pintura,
  },
  {
    id: 5,
    pathName: 'drywall',
    icon: icon_dry,
    cover: capa_drywall,
    title: 'Projetos de Fachadas de Telha Galvanizada',
    resumo: 'As fachadas de telha galvanizada aliam resistência, durabilidade e um visual ímpar a fachada do seu negócio.',
    text: 'A Art Toldos Comunicação Visual trabalha com a criação de projetos de fachadas de telha galvanizada com pintura especial eletrostática.',
    servicos: [],
    images: drywall,
  },
  {
    id: 6,
    pathName: 'arcondicionado',
    icon: icon_arcond,
    cover: capa_arcond,
    title: 'Computadores Gamer',
    resumo: 'Manutenção de Computadores e Computadores Gamer',
    text: 'Garantir o bom funcionamento e prolongar a vida útil do equipamento.',
    servicos: [
      "TODOS serviços de Hardware e Software em Geral;",
      "Limpeza dos componentes internos",
      "Verificação do funcionamento geral do aparelho",
      "Troca de peças e upgrade",
      
    ],
    images: arcond,
  },
];

export default services;
