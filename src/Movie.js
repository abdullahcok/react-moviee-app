import React, {Component} from 'react';

class Movie extends Component{
      viewMovie(){
          console.log("Viewed...");
          console.log(this.props.movie.title);
          const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
          window.location.href= url
      }

      playMovie(){
          const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
          window.location.href= url
      }

      render(){
            return   <table className="movieTable" key={this.props.movie.id}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img className="imgRounder" alt="Poster"  width="120" src={this.props.movie.poster_src}/>
                                        </td>
                                        <td>
                                              <h3>{this.props.movie.title}</h3>
                                              <p className="aveRage">{this.props.movie.overview}</p>
                                              <p className="aveRage">{this.props.movie.vote_average} %</p>
                                              <input className="view" type="button" onClick={this.viewMovie.bind(this)} value="View"/>
                                              <input className="play" type="button" onClick={this.playMovie.bind(this)} value="Play"/>
                                        </td>
                                    </tr>
                                </tbody>
                          </table>
      }
}

export default Movie;
