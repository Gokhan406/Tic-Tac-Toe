import React, { Component } from 'react'
import StartHeader from './components/StartHeader';
import First from "./First"
import StartBtn from './components/StartBtn';

export class Start extends Component {
    constructor(porps){
        super(porps);
        this.renderBtn = this.renderBtn.bind(this);
        this.nextPage = this.nextPage.bind(this);

        this.state={
            count:0,
            nextpage:false,
        }
    }

    nextPage(){
        this.setState({nextpage:true})
    }
    
    renderBtn(){
        return(
            <StartBtn nextPage={this.nextPage}/>
        );
    }

    render() {
        setTimeout(() => {
            this.setState({count:5})
        }, 3000);
        return (
            <div>
                {this.state.nextpage === false && (
                    <div className='start-parent'>
                        <div>
                            <StartHeader/>
                            <div className='start-div'>
                                {
                                    this.state.count == 5 &&
                                    this.renderBtn()
                                }
                            </div>
                        </div>
                    </div>
                )}

                {
                    this.state.nextpage === true && <First/>
                }
            </div>
        );
    }
}

export default Start