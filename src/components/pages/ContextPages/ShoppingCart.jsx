import ContentFooter from "../../layout/ContentFooter";
import ContentHeader from "../../layout/ContentHeader";
import { useTheme } from "../../context/ThemeContext";
import Card from "../../UI/Card";
import { useCart } from "../../context/CartContext";
import Button from "../../UI/Button";
import { useItem } from "../../context/ItemContext";

function ShoppingCart({ stacks, title }) {
  const { cardDark } = useTheme;
  const { cart, selectedCart, dispatch: cartDispatch } = useCart();
  const { items, selectedItem, dispatch: itemDispatch } = useItem();

  function handleQuantity(action, id) {
    const source = action.split("/")[0];
    switch (source) {
      case "cart":
        cartDispatch({ type: action, payload: id });
        break;
      case "item":
        itemDispatch({ type: action, payload: id });
        break;
      default:
        throw new Error("Unknown Source");
    }
  }

  async function handleAddItem(id) {
    const item = items.find((item) => item.id === id);
    cartDispatch({ type: "cart/add", payload: item });
  }

  return (
    <>
      <ContentHeader title={title} stacks={stacks} />
      <Card className="flex flex-col md:flex-row gap-2">
        {/* ITEMS */}
        <Card className="text-xs grid grid-cols-3 gap-2 items w-full md:w-1/2">
          {items.length > 0
            ? items.map((item) => (
                <>
                  <div
                    className="border border-gray-200 px-3 py-2 flex flex-col items-center gap-2"
                    key={item.id}
                  >
                    <h1>{item.name}</h1>
                    <p>{item.price}</p>
                    <div className="quantity-cta flex items-center gap-2">
                      <Button
                        onClick={() => handleQuantity("item/decq", item.id)}
                      >
                        -
                      </Button>
                      <p>{item.quantity}</p>
                      <Button
                        onClick={() => handleQuantity("item/addq", item.id)}
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      onClick={() => handleAddItem(item.id)}
                      className={"btn-primary"}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </>
              ))
            : "🛒 No Items..."}
        </Card>

        {/* CART */}
        <Card className="text-xs right cart w-full md:w-1/2 flex flex-col gap-2">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                className="border border-gray-200 px-3 py-2 items-center flex justify-around space-x-2"
                key={item.id}
              >
                <p>{item.name}</p>
                <p>{item.price}</p>
                <div className="flex items-center justify-center space-x-2">
                  <Button onClick={() => handleQuantity("cart/decq", item.id)}>
                    -
                  </Button>
                  <p>{item.quantity}</p>
                  <Button onClick={() => handleQuantity("cart/addq", item.id)}>
                    +
                  </Button>
                </div>
                <p className="text-red-700">{item.totalPrice}</p>
              </div>
            ))
          ) : (
            <p className="text-red-800">🛒 Your cart is empty..</p>
          )}
        </Card>
      </Card>
      <ContentFooter />
    </>
  );
}

export default ShoppingCart;
