import React from "react";

const experienceContent = [
  {
    year: "   2022 - Actualidad",
    position: "Desarrollador Web Frontend",
    companyName: "Autónomo",
    details:
      "Desde que comencé a formarme, he desarrollado proyectos con las siguientes tecnologías:",
    technologies: [
      "React.js para desarrollar numerosas aplicaciones web (total de 16), incluyendo el uso de las tecnologías MERN y Next.js.",
      "JavaScript como lenguaje favorito, y con la biblioteca D3.js para desarrollar 5 webs de visualización de datos.",
      "CSS incluyendo SASS, SCSS, bootstrap, tailwind, MaterialUI,styled-componentes y ChakraUI para estilizar mis webs.",
      "TypeScript para añadir tipos estáticos en mis proyectos más robustos y otorgar así un grado de corrección extra.",
      "Git para almacenar mis proyectos, hacer seguimiento de las versiones y de los cambios de estos.",
    ],
  },
  {
    year: "2018 - 2021",
    position: "Especialista en evaluación de datos",
    companyName: "Appen, Autónomo",
    details:
      "Creación, evaluación y corrección de datos relativos a mapas,productos y anuncios online con el fin de entrenar varias IAs.",
  },
  {
    year: "2017 - Actualidad",
    position: "Recepcionista de hotel",
    companyName: "Diferentes hoteles",
    details: "",
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.position}
            <span className='place open-sans-font'>{val.companyName}</span>
          </h5>
          <p className='open-sans-font'>{val.details}</p>
          <ul className='sublist'>
            {val.technologies
              ? val.technologies.map((value, i) => {
                  return (
                    <li
                      className='sublist-element'
                      key={i + 200}
                    >
                      <p className='open-sans-font ft-sz-12'>{value}</p>
                    </li>
                  );
                })
              : null}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
