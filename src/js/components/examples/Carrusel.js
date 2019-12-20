import React, {Component} from 'react';
import { Carousel, Radio } from 'antd';

class Carrusel extends Component {
  state = {
    dotPosition: 'bottom'
  }

  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

  onChange = (a) =>{
    console.log(a)
  }

  render() {
    const { dotPosition } = this.state;
    return (
        <Carousel 
          dotPosition={dotPosition}
          afterChange={this.onChange}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
    );
  }
}

export default Carrusel