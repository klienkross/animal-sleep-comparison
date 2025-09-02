// 动物睡眠数据（小时/天）
const animalSleepData = [
    { name: "长颈鹿", sleep: 1.5 },
    { name: "马", sleep: 2.9 },
    { name: "牛", sleep: 4 },
    { name: "人类", sleep: 8 },
    { name: "猪", sleep: 7.8 },
    { name: "兔子", sleep: 8.4 },
    { name: "狗", sleep: 10.6 },
    { name: "猫", sleep: 12.5 },
    { name: "狮子", sleep: 13.5 },
    { name: "浣熊", sleep: 14.2 },
    { name: "树懒", sleep: 20 } // 冠军！
];

function calculate() {
    // 1. 获取用户输入
    const userSleepHours = parseFloat(document.getElementById('sleepHours').value);

    // 2. 验证输入是否有效
    if (isNaN(userSleepHours) || userSleepHours < 0 || userSleepHours > 24) {
        alert("请输入一个有效的睡眠时长（0-24小时）！");
        return;
    }

    // 3. 计算逻辑：统计有多少动物睡得比用户少
    let countLessSleepy = 0;
    let closestAnimal = animalSleepData[0];

    animalSleepData.forEach(animal => {
        if (userSleepHours > animal.sleep) {
            countLessSleepy++;
        }
        // 顺便找一个睡眠时间最接近的动物做趣味对比
        if (Math.abs(animal.sleep - userSleepHours) < Math.abs(closestAnimal.sleep - userSleepHours)) {
            closestAnimal = animal;
        }
    });

    // 4. 计算百分比
    const percentage = (countLessSleepy / animalSleepData.length * 100).toFixed(1);

    // 5. 生成结果文本
    const resultText = `你每晚睡 <span class="highlight">${userSleepHours}</span> 小时，超越了 <span class="highlight">${percentage}%</span> 的动物！`;
    const animalText = `你的睡眠习惯最接近：<span class="animal-name">${closestAnimal.name}</span> (平均每天睡 ${closestAnimal.sleep} 小时)`;

    // 6. 显示结果
    document.getElementById('resultText').innerHTML = resultText;
    document.getElementById('animalComparison').innerHTML = animalText;
    document.getElementById('result').classList.remove('result-hidden');
}
