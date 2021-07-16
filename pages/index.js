/*import styled from 'styled-components'*/
import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} id="profilePicture" />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

/* const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
` */

export default function Home() {
  /*const githubUser = 'Alan-Jones-the-Aranmaru'*/

  const usuarioAleatorio = 'Alan-Jones-the-Aranmaru'
  const [comunidades, setComunidades] = React.useState([{
    id: '1234',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  //const comunidades = comunidades[0];
  //const alteradorDeComunidades = comunidades[1];
  //console.log('Nosso teste',);
  /*const comunidades = ['Alurakkut'];*/
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'

  ]


  /*aqui era o original, antes do parênteses return <Title>My page</Title>*/
  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
            
          <Box>
            <h2 class="subTitle" >O Que Você Deseja Fazer</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);
              console.log('Campo: ', dadosDoForm.get('title'));
              console.log('Campo: ', dadosDoForm.get('image'));
              
              const comunidadeNomeImagem = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              const comunidadesAtualizadas = [...comunidades, comunidadeNomeImagem];
              //comunidades.push('Alura Stars');
              setComunidades(comunidadesAtualizadas);
              
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sia comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sia comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar Comunidade
              </button>

            </form>
          </Box>

        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`} >
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} >
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          
        </div>
      </MainGrid>
    </>
  )
}

/**<Box>
            Comunidades
          </Box> */
