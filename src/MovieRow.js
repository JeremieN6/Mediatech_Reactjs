import React from 'react';

class MovieRow extends React.Component {
    viewMovie(){
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="110" src={this.props.movie.poster_src}/>
            </td>
            <td>
              <h3 class="ml-2">{this.props.movie.title}</h3>
              <p class="ml-2">{this.props.movie.overview}</p>
              <button type="button" onClick={this.viewMovie.bind(this)} class="btn btn-dark ml-2">Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow