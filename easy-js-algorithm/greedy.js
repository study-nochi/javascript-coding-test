function calculateChange(itemPrice, amountPaid) {
  let change = amountPaid - itemPrice; // 거스름돈 계산

  if (change < 0) {
    console.log('Not enough money');
    return;
  }

  const denomiations = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
  const changeResult = {};

  for (const denomiation of denomiations) {
    const count = Math.floor(change / denomiation);

    if (count > 0) { // 잔돈으로 거슬러 줄 수 있는 돈이 있을 때
      changeResult[denomiation] = count;
      change -= denomiation * count;
    }
  }

  console.log("Change: ", changeResult);
}

// 33000원 상품을 100000원으로 결제했을 때 거스름돈 계산
calculateChange(33000, 100000);