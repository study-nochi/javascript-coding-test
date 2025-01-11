function solution(N, stages) {
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
      challenger[stage] += 1
  }
  
  const fails = {};
  let total = stages.length;
  
  for (let i = 1; i <= N; i++) {
      if(challenger[i] === 0) {
          fails[i] = 0;
          continue;
      }
      fails[i] = challenger[i] / total;
      
      total -= challenger[i];
  }
  
  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
  
  return result.map((v) => Number(v[0]))

}

// 실패율
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// N: 전체 스테이지의 개수
// stages: 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열

