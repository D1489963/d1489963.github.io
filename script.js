// ==========================================
// 占卜結果資料區 (方便未來自行修改擴充)
// ==========================================
const fortunes = [
    {
        name: "✨ 大吉 - 星星的眷顧",
        work: "靈感爆發，專案進展神速，會得到上司的肯定。",
        study: "記憶力驚人！考試與學習都能輕鬆駕馭。",
        love: "桃花盛開，單身者有機會遇見心儀對象；有伴者甜蜜加溫。",
        money: "財運旺盛，可能會有意想不到的獎金或收入哦！",
        quote: "幸運就在你身邊，勇敢地去抓住它吧！"
    },
    {
        name: "🌟 中吉 - 穩步向前",
        work: "工作順利，按部就班就能達成今日目標。",
        study: "穩扎穩打，多做幾道練習題會讓你的觀念更清晰。",
        love: "感情平穩，適合安排一場簡單溫馨的約會。",
        money: "收支平衡，適合規劃長期的理財目標。",
        quote: "一步一腳印，今天也是充滿希望的一天。"
    },
    {
        name: "🕊️ 小吉 - 平凡的幸福",
        work: "可能會遇到一點小挑戰，但你可以輕鬆化解。",
        study: "保持平常心，今天適合複習舊知識。",
        love: "給對方一點空間，反而能讓感情更有彈性。",
        money: "不要衝動消費，省下一杯飲料錢也不錯。",
        quote: "平凡就是福，享受當下的寧靜與美好。"
    },
    {
        name: "🌀 末吉 - 潛伏期",
        work: "進度不一定如預期，但這是為了之後的爆發做準備。",
        study: "遇到瓶頸卡關了？換個環境或稍微休息一下吧。",
        love: "溝通容易產生小誤會，多點耐心聆聽。",
        money: "荷包有些緊縮，今天適合守財。",
        quote: "蹲下是為了跳得更高，請保持耐心好嗎？"
    },
    {
        name: "🔥 特大吉 - 奇蹟降臨",
        work: "今天你就是職場的MVP！任何難關都能迎刃而解。",
        study: "考神附體，直覺神準，學習效率翻倍！",
        love: "充滿魅力的你，今天會讓人移不開視線。",
        money: "財神爺發紅包啦！投資或小偏財運極佳。",
        quote: "奇蹟不是偶然，是你一直以來的努力發酵了。"
    },
    {
        name: "🌿 療癒 - 需要喘息",
        work: "太累了，適時推掉一些不急的業務吧，別硬撐。",
        study: "腦袋裝不下東西了，去戶外走走呼吸新鮮空氣。",
        love: "靜靜地陪伴勝過千言萬語，對方會懂你的。",
        money: "買個小禮物犒賞辛苦的自己是完全被允許的。",
        quote: "休息是為了走更長遠的路，對自己好一點。"
    },
    {
        name: "💡 轉機 - 靈光乍現",
        work: "換個角度思考，棘手的問題會突然有解。",
        study: "發現了新的學習方法，讓你瞬間豁然開朗。",
        love: "主動一點，事情會有意想不到的神奇進展。",
        money: "或許副業或是新靈感能為你帶來一筆額外收入。",
        quote: "世界沒有絕路，只有你沒想到的轉彎處。"
    },
    {
        name: "🛡️ 考驗 - 逆境成長",
        work: "會遇到挑剔的客戶或主管，這是磨練耐心好時機。",
        study: "今天的知識點特別難懂，多請教他人幫助很大。",
        love: "容易因為小事拌嘴，各退一步就能海闊天空。",
        money: "今天可能會有意外支出，小心看緊你的錢包。",
        quote: "打不倒你的，終將使你更加強大與堅韌。"
    },
    {
        name: "🎭 驚喜 - 不期而遇",
        work: "可能被指派參與一個非常有趣的全新計畫。",
        study: "會在圖書館或書店偶然發現一本改變思維的好書。",
        love: "路口的轉角，或許會發生偶像劇般的奇幻相遇。",
        money: "整理舊衣服時，可能會在外套口袋發現鈔票！",
        quote: "生活就像一盒巧克力，你永遠不知道下一顆是什麼口味。"
    },
    {
        name: "🌙 沉思 - 內觀自我",
        work: "少說話多做事，默默觀察局勢是今天的最佳策略。",
        study: "適合獨自安靜研讀，避免參與雜亂的人際社交。",
        love: "你需要一點獨處的時間來好好整理自己的心意。",
        money: "避免參與任何合夥投資，請相信你自己的直覺。",
        quote: "在安靜中，你能聽見自己靈魂最真實的聲音。"
    }
];

// ==========================================
// 頁面互動邏輯區
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // 取得 DOM 元素
    const drawBtn = document.getElementById("draw-btn");
    const retryBtn = document.getElementById("retry-btn");
    const interactionArea = document.getElementById("interaction-area");
    const resultArea = document.getElementById("result-area");
    const crystalBall = document.querySelector(".crystal-ball");

    // 取得顯示結果的 DOM 元素
    const elTitle = document.getElementById("result-title");
    const elWork = document.getElementById("result-work");
    const elStudy = document.getElementById("result-study");
    const elLove = document.getElementById("result-love");
    const elMoney = document.getElementById("result-money");
    const elQuote = document.getElementById("result-quote");

    // 隨機抽取運勢的函數
    function getRandomFortune() {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        return fortunes[randomIndex];
    }

    // 點擊抽取按鈕後的處理流程
    function handleDrawFortune() {
        // 1. 觸發水晶球震動動畫與按鈕狀態變更
        crystalBall.classList.add("shake");
        drawBtn.disabled = true;
        drawBtn.innerText = "🔮 感應宇宙能量中...";

        // 2. 模擬占卜等待時間 (1.5秒後顯示結果)
        setTimeout(() => {
            // 移除震動動畫
            crystalBall.classList.remove("shake");
            
            // 隨機抽取一筆結果
            const result = getRandomFortune();

            // 填寫資料到畫面上
            elTitle.innerText = result.name;
            elWork.innerText = result.work;
            elStudy.innerText = result.study;
            elLove.innerText = result.love;
            elMoney.innerText = result.money;
            elQuote.innerText = `「${result.quote}」`;

            // 切換畫面：隱藏互動區，顯示結果區
            interactionArea.classList.add("hidden");
            resultArea.classList.remove("hidden");
            
            // 恢復按鈕狀態，以便重置後可再次點擊
            drawBtn.disabled = false;
            drawBtn.innerText = "抽取我的運勢";
        }, 1500); 
    }

    // 重置占卜畫面
    function handleResetFortune() {
        // 隱藏結果區
        resultArea.classList.add("hidden");
        
        // 顯示互動區
        interactionArea.classList.remove("hidden");
        
        // 確保回到畫面最頂部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 註冊事件監聽
    drawBtn.addEventListener("click", handleDrawFortune);
    retryBtn.addEventListener("click", handleResetFortune);
});
