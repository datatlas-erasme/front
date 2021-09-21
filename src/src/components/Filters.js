import React, { Component } from 'react'

export default class Filters extends Component {
    state = {
        on : false
    }

    toggle = () => {
        this.setState({
            on : !this.state.on
        })
    }
    render() {
        return (
            <div className='filters'>
                <ul>
                    <li id="filter-parent-1" className="filter-parent">
                        <button onClick={this.toggle}>Structures Mediation</button>
                        {this.state.on && (
                            <ul>
                                <li className="filter-child"><button>Types de structures</button></li>
                                <li className="filter-child"><button>Publics concernes</button></li>
                                <li className="filter-child"><button>Types d'activites</button></li>
                            </ul>
                        )
                        }
                        </li>

                    <li id="filter-parent-2" className="filter-parent">
                        <button>Evenements</button>
                        <ul>
                            <li className="filter-child"><button>Conférences</button></li>
                            <li className="filter-child"><button>Ateliers</button></li>
                            <li className="filter-child"><button>Portes ouvertes</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
