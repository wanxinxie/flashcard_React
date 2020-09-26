import React from 'react';
import './App.css';
import ReactCardFlip from 'react-card-flip';
import Carousel from 'react-elastic-carousel';



class App extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false,
      word1: 'Word 1',
      def1: 'Definition 1',
      word2: 'Word 2',
      def2: 'Definition 2',
      word3: 'Word 3',
      def3: 'Definition 3',
      word4: 'Word 4',
      def4: 'Definition 4',
      word5: 'Word 5',
      def5: 'Definition 5',
      word6: 'Word 6',
      def6: 'Definition 6',
      word7: 'Word 7',
      def7: 'Definition 7',
      word8: 'Word 8',
      def8: 'Definition 8',
      word9: 'Word 9',
      def9: 'Definition 9',
      word10: 'Word 10',
      def10: 'Definition 10',
    };
    
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }


  render() {
    return (
      <div>
      <Carousel itemsToScroll={1} itemsToShow={1}>
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word1}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def1}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word2}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def2}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word3}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def3}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word4}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def4}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word5}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def5}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word6}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def6}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word7}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def7}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word8}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def8}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word9}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def9}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class="card">
          <div class="container">
            <h1>{this.state.word10}</h1>
            <button onClick={this.handleClick}>Click to flip</button>
          </div>
        </div>

        <div class="card">
          <div class="container">
            <h4><b>Definition</b></h4>
                        <p>{this.state.def10}</p>
            <button onClick={this.handleClick}>Click to flip</button>

          </div>
        </div>
      </ReactCardFlip>
</Carousel>

      </div>
    )
  }
}

export default App;
