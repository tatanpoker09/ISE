import React from 'react';
import {withRouter} from 'react-router-dom';
import StudentHeader from "../Student/StudentHeader";

class ActivityView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {activity: {
            title: "Base marciana",
            rubric: "Enseñanza media (tal vez 2do ciclo también). Trabajo grupal. Habilidades a desarrollar: comprender, evaluar y crear. ¿El estudiante logró encontrar información sobre Marte para entender sus diferencias con la Tierra? ¿Logró justificar sus decisiones en base a la información recopilada? ¿Logró modificar algo ya existente o usar algo con un fin completamente nuevo?",
            instructions: "En un futuro se necesitará tener una base espacial en el planeta Marte. Esto permitirá aprovechar los materiales de dicho planeta y ser un punto intermedio que permita viajes a lugares más alejados en nuestro sistema solar. Su misión es leer sobre Marte, con especial atención las diferencias que posee con la Tierra. Luego, pensar las mínimas cosas que se requerirían para satisfacer las necesidades básicas humanas: respirar, alimentarse, beber agua, etc. Hay estructuras que no podrán ser iguales a las que tenemos en la Tierra, piensen en al menos 3 cambios que deban introducirse y justifiquen con la información recopilada. Por ejemplo: vehículos, invernaderos, hogares, etc. Pistas: investigar la duración del día, del año, la gravedad superficial, si hay agua, etc.",
            ticket: {questions: [
                "¿Lograste ayudar a otros dentro del equipo? ",
                "¿Lograron dividir bien las tareas?",
                "¿Lograste crear nuevos objetos o usar otros de forma novedosa?",
                '¿Qué cosas nuevas aprendiste sobre Marte?'
              ]}}};
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
