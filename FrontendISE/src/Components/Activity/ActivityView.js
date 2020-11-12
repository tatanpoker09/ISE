import React from 'react';
import {withRouter} from 'react-router-dom';
import StudentHeader from "../Student/StudentHeader";

class ActivityView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {activity: {
            title: "Reloj Solar",
            rubric: " Enseñanza básica y media. Trabajo individual. Habilidades a desarrollar: comprender, aplicar. ¿El estudiante logró seguir las instrucciones? ¿Logró comprender los conceptos y aplicarlos para ver correctamente la hora?",
            instructions: "Recorta la página 1 de la cartulina por la línea de puntos más gruesa. Dobla la cartulina recortada por la línea de puntos más fina. Pega la zona que se indica como «pegar por detrás» para conseguir mayor estabilidad en el reloj. Apoya la figura construida en una superficie horizontal, como indica el dibujo. Recorta la línea negra continua que va a servir para introducir el marcador de las horas. En la página 2 de la cartulina recorta el cuadrado en el que se señalan las horas y dóblalo por la mitad. Introduce el cuadrado doblado en la ranura que ha quedado como resultado del corte de la línea negra. La cara de verano y primavera debe mirar al norte, mientras que la de otoño e invierno ha de quedar mirando al sur. Las 12 han de coincidir con la ranura.",
            ticket: {questions: ["¿Lograste seguir las instrucciones?", "¿Entendiste por qué el sol permite saber la hora?", "¿Lograste saber la hora utilizando el reloj?"]}}};
        //ActivityList
        this.showActivity = props.showActivity
    }

    showStats = () => {
      this.props.history.push('/report');
    }


    render() {
        return (
            <div id={"activity-full"} onClick={() => this.showActivity(null)}>
              <div id={'activity-card'} className={'text-white'}>
                <div id={"activities-select-title"} className={'text-large'}>
                  {this.state.activity.title}
                </div>
                  <p className={'text-medium'}>Rúbrica</p>
                  <p className={'text-small'}>{this.state.activity.rubric}</p>

                  <p className={'text-medium'}>Instrucciones</p>
                  <p className={'text-small'}>{this.state.activity.instructions}</p>

                  <p className={'text-medium'}> Ticket de salida </p>
                  <ul>
                    {this.state.activity.ticket.questions.map((question) =>
                        <li className={'text-small'}>{question}</li>
                    )}
                  </ul>
                <br/>
                <br/>
                <br/>
                <div className={'center-child'}>
                  <button className={'normal-button'} onClick={this.showStats}>Ver reporte</button>
                </div>


              </div>
            </div>
        );
    }
}

export default withRouter(ActivityView);
