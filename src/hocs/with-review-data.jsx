import React, {PureComponent} from "react";

const withReviewData = (Component) => {

  class WithReviewData extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {text: ``, rating: null};
      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleFormValuesReset = this._handleFormValuesReset.bind(this);
    }

    _handleTextChange(text) {
      this.setState({text});
    }

    _handleRatingChange(rating) {
      this.setState({rating});
    }

    _handleFormValuesReset() {
      this.setState(() => ({
        text: ``,
        rating: null
      }));
    }

    render() {
      // eslint-disable-next-line react/prop-types
      const {onSubmit} = this.props;
      const {text, rating} = this.state;

      return (
        <Component
          {...this.props}
          text={text}
          rating={rating}
          onTextChange={this._handleTextChange}
          onRatingChange={this._handleRatingChange}
          onSubmit={() => onSubmit({text, rating})}
          onFormValuesReset={this._handleFormValuesReset}
        />
      );
    }
  }

  return WithReviewData;
};

export default withReviewData;
