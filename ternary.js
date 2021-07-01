for (let i = 1; i <= 6; i++){
    let f = i % 2 == 0, b = i % 3 == 0;

    console.log(f ? (b ? '23' : '2') : b ? '3' : 'X');
}
