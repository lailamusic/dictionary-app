handleClick:
function (event) {
     this.setState({ size: SizeEnum.SMALL });
  },
  render:
  function() {
            return (
                <div>
                    <div style = { this.style}></div>
                    <input type="button" onClick={this.handleClick}
                </div>
            )
  }
