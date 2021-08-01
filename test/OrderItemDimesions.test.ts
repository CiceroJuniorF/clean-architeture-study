import OrderItemDimensions from "../src/OrderItemDimensions";

test("Deve calcular a densidade e o volume do OrderItem", () => {
    const width = 20;
    const height = 15;
    const depth = 10;
    const weight = 1;
    const orderItemDimensions = new OrderItemDimensions(width, height, depth, weight);
    expect(orderItemDimensions.getVolume()).toBe(0.003);
    expect(orderItemDimensions.getDensity()).toBe(333);    
});