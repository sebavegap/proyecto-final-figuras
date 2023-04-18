const calculaTotal = (totalPedido) => {
    let total = 0;
    totalPedido.map((p) => {
        total = total + (p.price * p.cantidad);
    })
    return total;
}

export { calculaTotal }