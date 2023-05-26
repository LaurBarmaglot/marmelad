class ShopList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        shops: [],
      };
    }
  
    componentDidMount() {
      fetch('/api/shops')
        .then(response => response.json())
        .then(data => {
          this.setState({ shops: data });
        });
    }
  
    render() {
      return (
        <div>
          <h1>Shops</h1>
          <ul>
            {this.state.shops.map(shop => (
              <li key={shop.id}>{shop.name}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
  
  function Cart() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <ul>
          {/* Render cart items */}
        </ul>
        <p>Total: $0.00</p>
        <button>Checkout</button>
      </div>
    );
  }
  
  ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={ShopList} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>,
    document.getElementById('app')
  );
  