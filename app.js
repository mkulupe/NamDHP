'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = {
      news: [],
      top: 0,
      last: 9,
      DataisLoaded: false
    };
    return _this;
  }

  // ComponentDidMount is used to
  // execute the code 


  _createClass(LikeButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True", {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'covid-19-news.p.rapidapi.com',
          'x-rapidapi-key': 'd82b247df5msh60496cd1428eaadp1a9f6ejsn1cbd579845de'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (json) {
        _this2.setState({
          news: json.articles,
          DataisLoaded: true
        });
        console.log(json);
      }).catch(function (e) {
        console.log(e);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          DataisLoaded = _state.DataisLoaded,
          news = _state.news;

      return React.createElement(
        'div',
        { className: 'row' },
        news.map(function (n) {
          return React.createElement(
            'div',
            { className: 'col-md-6 col-sm-12', key: n._id },
            React.createElement(
              'div',
              { className: 'card primary-shadow rounded-md  pa-2 ', style: { height: 'auto'} },
              React.createElement(
                'div',
                { className: 'card-body' },
                React.createElement(
                  'h5',
                  { className: 'card-title' },
                  React.createElement(
                    'b',
                    null,
                    n.title
                  )
                ),
                React.createElement(
                  'h6',
                  { className: 'card-subtitle mb-2 text-muted' },
                  n.published_date,
                  ' ,',
                  React.createElement(
                    'small',
                    null,
                    'Source:'
                  ),
                  ' ',
                  React.createElement(
                    'b',
                    null,
                    n.clean_url
                  )
                ),
                React.createElement(
                  'p',
                  { className: 'card-text' },
                  n.summary
                ),
                React.createElement(
                  'a',
                  { href: n.link, className: 'card-link' },
                  'Read More'
                )
              )
            )
          );
        })
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#covid_news_container');
ReactDOM.render(e(LikeButton), domContainer);