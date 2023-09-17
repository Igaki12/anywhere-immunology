import {
  useState
} from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['HLA', 'Human Leukocyte Antigen', "ヒト白血球抗原"],
      explanation: '免疫系で自己と非自己を見分けるための因子。人の全ての有核細胞に存在しているClass1と、抗原提示細胞（樹状細胞・マクロファージ・活性化B細胞など）で発現しているClass2に分類される。対立遺伝子の組み合わせによってハプロタイプが決定されていて、兄弟間でHLAが一致する確率は約4分の1存在するが、HLAの組み合わせ自体は数万種類以上あり、赤の他人で一致する可能性はかなり低い。HLAの遺伝学的特性が、個人の疾病感受性・ひいては生存までをも左右する。',
    },
    {
      term: ["PRR", 'パターン認識レセプター', 'Pattern Recognition Receptor'],
      explanation: '細菌や人には存在していない特別なセンサー群で、各臓器のマクロファージで病原体を認識する。TLRs,CLRなど',
    },
    {
      term: [
        '病原体関連分子パターン',
        'Pathogen associated molecular patterns',
        'PAMPs',
      ],
      explanation: 'PAMPsとも。人には存在せず、病原体にのみ存在し、これをパターン認識レセプターPRRが認識することによって、病原体の侵入を速やかに感知することができる。',
    },
    {
      term: [
        '抗体依存性細胞障害活性',
        'ADCC',
        'Antibody Dependent Cellular Cytotoxicity',
      ],
      explanation: '獲得免疫によって抗体が結合している細胞を、NK細胞が障害する機構。標的はがん細胞・細菌・ウイルス感染細胞など。',
    },
    // {
    //   term: ['Cluster of differentiation', 'CD'],
    //   explanation: '細胞表面に存在する分子（表面抗原）に結合するモノクローナル抗体の国際分類。CD3はT細胞、さらにCD4はヘルパーT細胞、さらにCD8はキラーT細胞、CD19はB細胞、CD56はNK細胞、CD3とCD56を同時に持っている細胞はNKT細胞が保有している。表面マーカーの測定はフローサイトメトリー(Flow Cytometry)によって行われる。',
    // },
    {
      term: ['フローサイトメトリー'],
      explanation: '細胞表面に対してレーザーを照射し、散乱光が前方に観測されるか、側方に観測されるかによって細胞表面を判別しようとする手法。',
    },
    {
      term: ['サイトカインストーム'],
      explanation: '感染症や薬剤投与などの原因により、血中サイトカイン（炎症性サイトカイン:IL-1,IL-6,TNF-αなど）の異常上昇が起こり、その作用が全身に及ぶ結果、敗血症性ショックを引き起こす。',
    },
    {
      term: ['サイトカイン', 'cytokine'],
      explanation: '細胞が産生する微量生理活性タンパク質の総称。100種類以上存在する。IFN、TNF、ILなど、機能は多岐にわたる。それぞれの名称に付いている数字は分子の同定順で、分子の機能と関連性があるわけではなく、また１つのサイトカインに複数の名称があり、複雑なネットワーク→サイトカインネットワークを形成している点が難しい。サイトカインの閾値thresholdはpg ~ ngオーダーであり、きわめて低量で、また特異的な受容体をもつ細胞だけに効果を発揮する。',
    },
    {
      term: ['インターロイキン', 'interleukin'],
      explanation: 'サイトカインのうち、白血球相互の作動物質。造血系サイトカインとしてIL-5（肥満細胞・Th2→好酸球）、IL-7（骨髄・胸腺間質細胞→リンパ球）、IL-15（樹状細胞・マクロファージ→NK細胞）、抑制性サイトカイン（免疫応答における負のフィードバック）としてIL-10、炎症性サイトカインとしてIL-1、IL-6（←活性化マクロファージなど）などが知られる。',
    },
    {
      term: ['TLR', 'Toll-like Receptor'],
      explanation: '最も有名なパターン認識レセプターPRRで、PRRの代表格樹状細胞・マクロファージ・B細胞のような抗原提示細胞だけでなく、特定のT細胞や非免疫性細胞にも見られる。現在ヒトでは10種類同定されている。グラム陽性菌(TLR2)・グラム陰性菌(TLR4)・ウイルス(TLR3,7)などによって種類が異なる。TLRが活性化されると、TLR3以外はMyD88に依存する経路が活性化され、TLR3/TLR4はTRIF依存の経路が活性化される。ナイーブT細胞の選別にも関わっている。',
    },
    {
      term: ['LPS', 'リポポリサッカライド', 'Lipopolysaccharide'],
      explanation: 'グラム陰性細菌の外膜成分として存在し、エンドトキシンの本体である。糖脂質/リポ多糖とも呼ばれ、O抗原多糖-コア多糖-脂質成分(Lopid A)で構成される。TLR4によって認識される。',
    },
    {
      term: ['TNF-α'],
      explanation: '感染部位に好中球と単球を動員・活性化させ、病原体の排除に働く、TLRなどによって病原体感染が認識されるとMyD88を介してNF-kBを活性化させることで産生される、炎症性サイトカインのひとつ。',
    },
    {
      term: ['IL-6'],
      explanation: 'B細胞から抗体産生細胞への最終分化を誘導する因子の一つとして単離された。抗体産生誘導・急性炎症・Th17細胞分化・造血・血小板産生など多彩な生理機能を持つ炎症性サイトカインの一つである。機能が多岐に渡るため、IL-6アンプ（過剰産生：サイトカインストーム）による敗血症性ショックを引き起こす。',
    },
    {
      term: ['SIRS', 'systemic inflammatory response syndrome'],
      explanation: 'サイトカインを中心とした免疫-炎症反応による非特異的な全身生体反応。感染症に起因するSIRSを敗血症と呼ぶ。',
    },
    {
      terms: ['敗血症性ショック', 'septic shock', 'SIRS', 'CARS'],
      explanation: '細菌感染により炎症性サイトカイン(TNF-α,IL-6,IL-1)の過剰産生が起きると敗血症性ショックを引き起こす。病原体由来PAMPs・炎症性サイトカイン・細胞障害により生じるDAMPs→サイトカインストーム→血管虚脱・代謝障害・播種性血管内凝固症DIC。過剰なサイトカインが分泌されている状態：Systemic Inflammatory Response Syndrome/SIRSと抑制されすぎている状態：Compensatory Anti-inflammatory Response Syndrome/CARSに分類され、より対処が難しいCARSの方が予後不良。',
    },
    {
      term: ['DAMPs', 'Damage-Associated Molecular Patterns'],
      explanation: '損傷組織または壊死に向かっている細胞から放出される分子機構。PAMPs（病原体由来）と同じくPRRs(TLRs,NLRs,RLRs)などの内因性リガンドとなる。',
    },
    {
      term: ['インターフェロン', 'IFN'],
      explanation: 'インターフェロンはおよそ3種類存在し、Ⅰ型(IFN-α/IFN-β)とⅡ型(IFN-γ)に分類される。Ⅰ型は細胞を抗ウイルス状態にする/感染細胞がT細胞に傷害されやすいようにする作用をもち、Ⅱ型は免疫活性化や殺菌作用に働く遺伝子発現を誘導する。',
    },
    {
      term: ['ケモカイン', 'chemokine', 'CXCL', 'CCL'],
      explanation: '白血球遊走やリンパ球のホーミングに関わるサイトカイン。4つのタイプに構造的にわかれる。様々な白血球がケモカインに対するGタンパク共役受容体GPCR（7回膜貫通型）を持っていて、走化性を示す。白血球の局所浸潤だけでなく、リンパ球の二次リンパ組織へのホーミングにも必須で、臓器特異的ケモカインはT細胞とB細胞の局在化にも利用されている。ケモカイン受容体の異常により白血球の分布が乱され、HIVなどの感染の要因となる。',
    },
    {
      term: ['共刺激因子', 'Co-stimulatory molecule'],
      explanation: '古減の環化を受けていないナイーブT細胞のセレクションには、MHC複合体だけでなく共刺激因子を介した補助シグナルも必要となる。',
    },
    {
      term: ['RLR', 'RIG-I like receptor', 'Retinoic acid-Inducible Gene-I'],
      explanation: 'パターン認識レセプターPRRsのひとつで、インフルエンザウイルス・センダイウイルス・ニューキャッスル病ウイルス・日本脳炎ウイルスなどのRNAウイルス認識に重要な役割を持つ。認識するとIPS-1/Interferon-β promoter stimulator 1を誘導し、Ⅰ型インターフェロンや炎症性サイトカインを産生するよう誘導する。',
    },
    {
      term: ['CLR', 'C-type lectin receptor'],
      explanation: 'パターン認識レセプターPRRsのひとつで、CRD(carbohydrate recognition domain)を持ち、特に真菌Fungusの認識には重要な役割を担う。真菌や酵母の細胞壁に見られるβグルカン・真菌の細胞壁にも含まれる多糖類のα-マンナンがリガンドで、カンジダ血症の診断に用いられている。',
    },
    {
      term: [
        'NLR',
        'Nod-like receptor',
        'NOD様受容体',
        'Nucleotide binding oligomerization domain',
      ],
      explanation: '細胞内にある細菌認識機構で、全てNODモジュールを有している。NOD1/NOD2はペプチドグリカンをそれぞれ特異的に認識している。TLRのような細胞外領域ではなく、細胞質内で主に細胞内寄生細菌を認識する。',
    },
    // {
    //   term: ['inflammation', '炎症'],
    //   explanation: '炎症は熱感heat、発赤redness、腫脹swelling、疼痛pain（と機能障害dysfunction）の計4~5つの主徴がある。身体のどの部分で起こってもこの反応は起こる。',
    // },
    {
      term: ['arteriosclerosis', '動脈硬化'],
      explanation: '動脈の内膜に悪玉コレステロールが蓄積してマクロファージに取り込まれ、泡沫細胞Foam cellや血小板が血管を狭窄してしまう症状。ほとんど見えないはずの内膜に炎症反応が起こり肥厚してしまう。炎症は基本内膜のみで中膜は逆に薄くなることが多い。',
    },
    {
      term: ['metabolic syndrome', 'メタボリック症候群'],
      explanation: '内臓脂肪が蓄積した状態。脂肪細胞の肥大化・血管新生・マクロファージやリンパ球浸潤・細胞外マトリックスの過剰産生が起こり、様々な代謝異常を引き起こす。糖尿病・NAFLD（→NASH）・動脈硬化などの原因となる。',
    },
    {
      term: ['Spred2'],
      explanation: '炎症性サイトカインに反応してMAP Kinaseを活性化する経路を抑制する遺伝子。Spred2 KOマウスでは炎症・がんのシグナルのブレーキが効かなくなり、MAPK活性化ループによって、食餌性肥満が増悪し高脂肪食負荷時の脂肪織炎（脂肪細胞が脂肪を貯めこんで炎症を起こす）が増悪する。また、Spred2はがん細胞の上皮間葉転換：EMTもダウンレギュレーションする役割を担っているので、KOマウスではがんの転移・浸潤能、幹細胞性stemnessに影響を与える。',
    },
    {
      term: ['Alzheimers disease', 'アルツハイマー病', 'アデュカヌマブ'],
      explanation: 'アルツハイマー病は神経炎症が原因で、アミロイドβに対する抗体医薬（抗アミロイドβ抗体）：アデュカヌマブがアメリカで承認されている。抗体はBBBを通過できないが、BBBに発現するレセプターに対応する構造をアデュカヌマブは保有しているため、BBBを通過することができるといわれている。他に代わる薬が存在しないため承認されたが、アルツハイマー病（や認知症）に有効かどうかははっきりしておらず、日本では認可が下りなかった。エーザイは水溶性のアミロイドβを標的としたレカネマブを開発し、現在承認申請中である。',
    },
    {
      term: ['esophageal cancer', '食道癌'],
      explanation: '胃酸逆流による逆流食道炎が主な原因。手術が大変。慢性炎症にかかわる癌。',
    },
    // {
    //   term: ['CAR-T', 'Chimeric antigen receptor T cell', '次世代養子免疫療法'],
    //   explanation: '患者から採取したT細胞にCAR（強力に活性化したT細胞）を導入し、増幅培養して患者に戻す（輸注する）免疫療法。血球慧眼には著効だが、固形がんには効きにくく、サイトカインストーム・脳浮腫などの副作用があり安全性・コストの面でも課題がある。',
    // },
    {
      term: ['ペプチド医薬品', '中分子医薬品'],
      explanation: '抗体医薬品（高分子医薬品）は非常に高価で、アスピリンなどの低分子医薬品は範囲が広すぎて副作用が多い。これらの課題を解決するために第三の医薬品としてペプチド医薬品（中分子医薬品）が注目されている。',
    },
    {
      term: ['悪性中皮腫', 'アスベスト', 'mesothelioma'],
      explanation: 'アスベスト/石綿は建築用材として利用され、解体などの際に粉末が人体に吸い込まれると胸膜に蓄積して慢性的な炎症を引き起こし悪性中皮腫や肺がんを発症する。現在ではアスベストの使用は禁止されているが、実際にアスベストの曝露から発がんに至るまで数十年の期間が存在するため、今後さらに問題となるといわれている。',
    },
    {
      term: ['メラノーマ', 'melanoma', '皮膚炎', 'dermatitis'],
      explanation: '紫外線はDNAの塩基配列を破壊し、これが修復されず蓄積すると慢性的な炎症を経てメラノーマを発症する。日本人を含む黄色人種では白人と比べて紫外線によるメラノーマは少ないといわれてきたが、近年は増加傾向にある。',
    },
    {
      term: ['慢性炎症', 'chronic inflammation'],
      explanation: '慢性的な炎症下にある組織では線維化fibrosisが進行し、リンパ球やマクロファージの浸潤lymphocyte and macrophage infiltrationがみられる。慢性的に続くとがんなどの原因となる。',
    },
    {
      term: ['急性炎症', 'acute inflammation'],
      explanation: '急性的な炎症を引き起こしている細胞では間質の浮腫stromal edema・好中球の浸潤neutrophil infiltrationが確認され、ところどころ出血（に伴う赤血球）も見られる。',
    },
    {
      term: ['免疫原性'],
      explanation: '抗原で、単独で抗体を産生できることを、免疫原性があるという。免疫原性があり、抗原性がある抗原を完全抗原Complete antigenという。完全抗原は生体に抗体産生を誘導することができる。反対に単独で抗体を産生できない＝免疫原性が無い抗原は不完全抗原と呼ばれるが、不完全抗原でもキャリアタンパクを利用すると抗体を産生させることはできる。',
    },
    {
      term: ['hapten', 'ハプテン'],
      explanation: '不完全抗原。抗体と結合することはできる（抗原性はある）が、単独で抗体を作らせることができない物質。低分子の化学物質、薬物、金属など。',
    },
    {
      term: ['carrier', 'キャリア'],
      explanation: 'ハプテン（不完全抗体）に対して抗体が作られることを可能にするタンパクのような物質。ハプテンキャリア複合物として抗体産生を誘導することができる。KLH、OVA、LPSなど。',
    },
    {
      term: ['adjuvant', 'アジュバント'],
      explanation: '抗原に対する免疫反応を非特異的に増強する物質。アルミニウム塩、Pattern Recognition Receptor、スクアレンなど。小児用肺炎球菌ワクチンなどに利用されている。',
    },
    {
      term: ['epitope', 'エピトープ', '抗原決定基'],
      explanation: '抗原がレセプター（タンパク質・多糖などの高分子）と結合する部位。抗原の中の一部分だけが認識される。抗原決定基ともよばれる。タンパク質の一次構造に依存するものを線状エピトープ、タンパク質の立体構造に依存するものをコンフォメーショナルエピトープとよぶ。',
    },
    {
      term: [
        'MHC',
        'Major Histocompatibility Complex',
        '主要組織適合遺伝子複合体',
      ],
      explanation: '自己と非自己の区別に関わる物質（抗原）。遺伝的多型性に富み、TCRへの抗原提示の土台としてMHC class1/2が用いられる。臓器移植で重要となり、MHCミスマッチの場合非自己と認識するT細胞の頻度が高く、現在では臓器移植の前にMHC適合試験が必須。',
    },
    // {
    //   term: ['HLA', 'Human Leukocyte Antigen', 'ヒト白血球抗原'],
    //   explanation: 'ヒトのMHC。マウスの場合はH-2、豚の場合はSLA。テストでは基本ヒトについての問題なので、HLAで表されることが多い。ヒトのMHC遺伝子は第6染色体短腕に存在し、約400kbにわたる遺伝子群を構成する（関連遺伝子がセットでコードされている）。HLA遺伝子は多遺伝子性polygeny。翻訳する遺伝子の組み合わせによって多数のHLA-DR分子に対応する発現をする。また対立遺伝子数が多いため、多型性Polymorphismである。',
    // },
    {
      term: ['iPS細胞ストックプロジェクト', 'HLAホモドナー'],
      explanation: '日本列島人のHLA遺伝子配列は偏っているので、わずか7人からの由来のiPS細胞で40%に対するストックを作製することができる。細かいHLA抗原は無視してストックを作製する。',
    },
    {
      term: ['allele-specific pocket'],
      explanation: 'HLA Class1分子は8~9アミノ酸、HLA Class2分子は12~20アミノ酸のペプチドを抗原提示するのだが、実際にアミノ酸と結合する部分をallele-specific pocketとよぶ。',
    },
    {
      term: ['Immunodominant epitope', 'イムノドミナントエピトープ'],
      explanation: '免疫優性エピトープで、MHC分子に強く結合することができ、抗原提示されやすい。→安定的にT細胞に抗原提示されやすい。イムノドミナントエピトープを含むペプチドは、ワクチンに有用。',
    },
    {
      term: ['抗原提示', 'antigen presentation'],
      explanation: '抗原を取り込んだ抗原提示細胞が、細胞内でペプチドにまで断片化し（抗原処理antigen processing）、その断片をMHC-ペプチド複合体を形成し、細胞表面に提示すること。内在性抗原（その細胞の中で0から細胞質で合成された抗原）はHLA Class1分子によってCD8陽性Tk細胞に提示し、外来性抗原（外からタンパクのまま取り込まれて消化されて細胞に取り込まれた抗原）はHLA Class2分子によってCD4陽性T細胞に提示される。直接抗原提示（移植の急性期に関与）と間接抗原提示（慢性拒絶）がある',
    },
    {
      term: ['Cross-presentation', 'クロスプレゼンテーション'],
      explanation: '外来性抗原をMHCクラス1分子で提示することによって、外来性抗原をCD8陽性T細胞へ提示することができるようになる。さらにウイルス特異的T細胞を増やすことで免疫に寄与することができる。外来性抗原がエンドサイトーシスで取り込まれ、断片化された後一度小胞から出て、プロテアソームで抗原処理されたのち、再度TAPを介して小胞に入り、HLAクラス1分子と結合し細胞膜へ移行する。',
    },
    {
      term: ['immunoproteasome', 'イムノプロテアソーム'],
      explanation: 'プロテアソームの中でも、抗原提示により特化したプロテアソーム。3つのサブユニットが置き換わっていて、MHCクラス1分子に結合しやすい抗原ペプチドを作る。',
    },
    {
      term: ['mTEC'],
      explanation: '胸腺髄質上皮細胞mTECはゲノムにコードされた全ての遺伝子を低いレベルで無差別に発現する→自己抗原。これに反応する未熟T細胞は分化段階で除去される→胸腺での負の選択に寄与する。',
    },
    {
      term: ['膜型抗体', "分泌型抗体"],
      explanation: '抗体分子には膜型と分泌型があり、B細胞はクラスチェンジを経て両方の抗体分子を生成する。膜型抗体を合成し細胞膜で抗原をキャッチ→分泌型抗体を合成し分泌することで抗体型免疫に寄与。',
    },
    {
      term: ["L鎖", 'λ鎖', "κ鎖", "κ/λ"],
      explanation: '抗体のL鎖（イムノグロブリンの軽鎖）はκ鎖とλ鎖の2種類の遺伝子があり、そのうちのどちらかの遺伝子を使用している。使用率の割合は生物種によって異なっていて、ヒトの場合はκ/λの比率は67%/33%となっている。齧歯目・ウサギ目はκ鎖がほとんどで、有蹄目はλ鎖の割合が高い。L鎖の遺伝子は違う染色体の2箇所に存在し、可変領域は２つのセグメント(VとJ)により構成される。',
    },
    {
      term: ['多発性骨髄腫', "multiple myeloma", "Bence-Jones protein", "ベンスジョーンズ"],
      explanation: '形質細胞ががん化してしまった疾患。完全な抗体ではなくL鎖だけ産生してしまうものもあり、これらは尿中に排出されるため、尿蛋白：ベンスジョーンズタンパクとして検出される。',
    },
    {
      term: ['パパイン', "ペプシン"],
      explanation: '抗体のヒンジ領域に作用することで抗体を分解する酵素群。パパイン分解では2個のFabと1個のFc、ペプシン分解では1個のF(ab’)2が生成される。人工抗体技術に応用されている。',
    },
    {
      term: ['CDR', "Complementarity-determining region", "相補性決定領域"],
      explanation: '抗原認識に最も重要な領域。抗体の超可変領域と一致する。Igドメインは3~5個のβストランドによって構成され、S-S結合によって安定化されていて、相補性決定領域は隣接するβストランドの間の短いループ部分。CDR3はCDRの中で最も可変性に富む。CDR1やCDR2はVセグメントの配列に依存するが、CDR3はV-D結合部位→Dセグメントにより形成されるため、臂臑に高い多様性を生じる。',
    },
    {
      term: ['affinity', "アフィニティ"],
      explanation: '抗体の1つの抗原結合部位と抗原エピトープの結合の強さを親和性(affinity)という。',
    },
    {
      term: ['avidity', "アビディティ"],
      explanation: '抗体結合部位1つあたりの親和性のことをaffinityとよぶが、実際の抗体は2つの結合部位を有し多量体を形成することから、抗体と抗原に対する結合全体の強さをアビディティという。',
    },
    {
      term: ['FC受容体', "Fc receptor"],
      explanation: '抗体の定常領域/Fc部分に対する受容体。様々な細胞が様々なFc受容体を発現している。オプソニン化・抗体依存性細胞障害・シグナル伝達など。→抗体を受容することによる活性化ITAM/抑制ITIM',
    },
    {
      term: ['ADCC', "Antibody-dependent cellular cytotoxicity", "Antibody-dependent cell-mediated cytotoxicity", "抗体依存性細胞障害"],
      explanation: 'IgGが結合した細胞はNK細胞のFc受容体(FcγRⅢA)により認識され破壊される。',
    },
    {
      term: ["IgM", '自然抗体'],
      explanation: '血清中では5量体として存在する。膜型IgMは成熟B細胞に抗原受容体として発現。IgMは主に補体の活性化を引き起こす。感染が無くても自然産生される。胎児免疫にも重要で、胎児期20週から産生される。新生児のIgM高値は胎児期の子宮内感染を考慮する必要がある。IgMは補体活性化（古典経路）にも関与する、',
    },
    {
      term: ['親和性成熟', "クラススイッチ"],
      explanation: '膜型抗原を携えて病原体を探している抗原特異的B細胞から、抗体産生B細胞へ切り替わることをクラススイッチ/親和性成熟という。',
    },
    {
      term: ['FcRn', "neonatal Fc receptor", "新生児Fc受容体"],
      explanation: 'IgGは胎盤のFcRnに結合して、胎児へと移行（エンドソームによって）する。IgGは血管内皮細胞のFcRnと結合することで、分解から逃れて循環系へ戻ることができるため、半減期が長い（約半年）',
    },
    {
      term: ['IgE'],
      explanation: '石坂公成博士によって1966年に発見された、寄生虫感染に対する免疫応答に重要な抗体。血清中には単量体として微量存在する（最も少ない）。Th2反応により産生が誘導され、即時型過敏反応を引き起こす。→気管支喘息や蕁麻疹などの原因となる。IgEは好酸球上のFcε受容体と結合し、好酸球の活性化、MBP放出を引き起こして寄生虫を障害する。アレルゲンに結合するとヒスタミンなどのメディエーター分泌を引き起こしてアレルギー反応の原因となる',
    },
    {
      term: ['クームス試験'],
      explanation: '抗体の凝集・沈降反応を利用した、Rh血液型抗原などに対する不規則抗体の検出試験。直接クームス試験（母親の血清にRh+赤血球の添加などを行う）と間接クームス試験（母親の抗原を結合した洗浄胎児赤血球を直接母親に投与する）が存在する。新生児溶血性疾患などに有効：Rh-の母体からRh+の胎児が出産されると、母体側にRh+に対する抗体が生成され、2人目以降の胎児を異物として攻撃してしまう。',
    },
    {
      term: ['ヌクレオカプシド'],
      explanation: '新型コロナの抗原検査に利用される。新型コロナウイルスのスパイク蛋白はコロナワクチン接種によって産生されるが、コロナウイルス内側のヌクレオカプシドはワクチン接種では生成されず、また変異も起こりにくい。',
    },
    {
      term: ['repertoire', "レパートリー"],
      explanation: '生体には特定の抗原に反応するリンパ球が無数に準備されていて、病原体が侵入した時に抗原特異的リンパ球のみが反応して、抗体を産生することができる。このように様々なリンパ球がそろっていることをレパートリーという。このような抗体の多様性は抗体遺伝子の組換え：遺伝子再構成によって可能となっている。レパートリーにはVDJ遺伝子再構成による一次レパートリーと、体細胞突然変異により拡大した二次レパートリーが存在する。',
    },
    {
      term: ['RSS', "Recombination signal sequence", "組換え認識配列"],
      explanation: 'Ig遺伝子の再構成部位にはRSSが存在し、12-RSSと23-RSSが近接した際に組み換えが起こることによって、免疫グロブリン遺伝子の再構成は規則的に行われている。',
    },
    {
      term: ['Artemis'],
      explanation: '遺伝子再構成の分子機構の一部を担う酵素。Artemisがヘアピン構造を分解し、分解されたDNA末端に塩基を付加したり、非相同的末端結合が行われれう事によって、遺伝子再構成が行われている。',
    },
    {
      term: ['プレB細胞', "pre-BCR発現細胞"],
      explanation: 'pre-BCR：プレB細胞レセプターが細胞表面に発現したB細胞のことをプレB細胞という。プレB細胞→未熟B細胞→成熟B細胞',
    },
    {
      term: ['アナジー', "anergy"],
      explanation: '弱い自己抗原認識をもつB細胞に対して起こる自己反応性未熟B細胞の機能鉄器不応答性の排除。抗原レセプター発現が低下し、シグナル伝達が阻止される',
    },
    {
      term: ['RAG', "Recombination-activating gene", "VdJ組換え酵素"],
      explanation: 'B細胞での遺伝子再構成を担う酵素。V、D、Jそれぞれから1つずつ合成するセグメントを選び出し、それ以外のセグメントを切断する。この際に各セグメント末端はヘアピン構造を取る。',
    },
    {
      term: ['ordered rearrangement'],
      explanation: 'T細胞やB細胞は多様な抗原に反応するため、成熟過程で遺伝子再構成を行っているが、この遺伝子再構成は非常に規則的に行われる。',
    },
    {
      term: ['DPT細胞', "Double positive T cell"],
      explanation: 'CD4+CD8+のT細胞で、αβ型TCR発現している。胸腺皮質で正の選択がなされSPT細胞(Single Positive T cell)に成熟していく。幹細胞→DNT細胞→DPT細胞→SPT細胞（未熟T細胞）→ナイーブ成熟T細胞の順に分化していく。',
    },
    {
      term: ['DNT細胞', "Double Negative T cell", "プロT細胞", "プレT細胞"],
      explanation: 'CD4-CD8-のT細胞で、プロT細胞やプレT細胞に分類される。プロT細胞ではβ鎖の遺伝子再構成が行われ、プレT細胞ではプレTCRの発現や対立遺伝子の排除（T細胞一つにつき1つの遺伝子を守るための機構）が行われている。T幹細胞→プロT細胞→プレT細胞→DPT細胞→SPT細胞→ナイーブ成熟T細胞の順に成熟していく。',
    },
    {
      term: ['柿タンニン', "柿渋"],
      explanation: '柿渋に含まれる柿タンニンは、蛋白結合能が強くウイルスが結合体に結合するより早く結合してしまうことによって、ウイルスを不活化することができる。新型コロナウイルスにも有効（柿タンニン含有飴による実験）。',
    },
    {
      term: ['Bcl-11b'],
      explanation: 'DNT細胞がT細胞系列への分化を決定づける転写因子。DN2期から発現し、他の細胞への分化能を失う。',
    },
    {
      term: ['Notch'],
      explanation: 'Notchシグナルは、進化上保存された細胞間シグナル伝達経路で、発生段階だけでなく多くの免疫担当細胞の分化に多段階で関わっている。リンパ球の前駆細胞が胸腺OR骨髄に移動するかはNotchシグナルを発現しているかによる。Notchシグナルがあれば胸腺でT細胞へ、なければ骨髄でB細胞へ分化する。',
    },
    {
      term: ['皮質上皮細胞', "cTEC"],
      explanation: 'T細胞の正の選択に関わる細胞。cTECが発現する自己ペプチド・MHC複合体と適度な親和性があるTCRを有する胸腺細胞が生存する。',
    },
    {
      term: ['AIRE', "自己免疫性多腺性内分泌不全症", "autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy"],
      explanation: 'AIREは特殊な中枢性寛容を胸腺にもたらす、自己抗原に相当する遺伝子（胸腺にないものも含む）を一過性に発現することができ、ネガティブセレクションに関与する。AIREに変異があると自己免疫疾患を発症する→自己免疫性多腺性内分泌不全症',
    },
    {
      term: ['fezf2'],
      explanation: 'AIREとともに特殊な中枢性寛容を胸腺細胞にもたらす。',
    },
    {
      term: ['γδ', "γδ型T細胞", "Gamma/Delta T"],
      explanation: '胸腺内で10%を占め、一般的なT細胞(αβ型T細胞)とは区別され、MHC拘束性の抗原提示を受けず、リンパ球ストレス監視機構（ストレスや細菌感染、がん化に伴う細胞の変化：MICA・MICBを感知）を担い、粘膜免疫に対するバリアとして作用する、自然免疫の一員。αβ型T細胞とはDN細胞の段階で別の分化をたどる。',
    },
    {
      term: ['B7ファミリー', "CD80", "CD86"],
      explanation: 'ナイーブT細胞を刺激し活性化するために必要なリガンド。',
    },
    {
      term: ['カルシニューリン', "CNI"],
      explanation: '免疫抑制剤のひとつであるカルシニューリン阻害薬(CNI)は、免疫反応（T細胞増殖）に必須なIL-2産生に必要な転写因子のうちAP1を活性化するために必要な酵素：カルシニューリンを阻害する。臓器移植後によく用いられる。',
    },
    {
      term: ['TSST-1', "Toxic Shock Syndrome"],
      explanation: '黄色ブドウ球菌などが産生するスーパー抗原が、ショックをもたらす。',
    },
    {
      term: ['結核', "pulmonary tuberculosis", "乾酪壊死"],
      explanation: '結核菌によって肺に炎症が起こる病気で、感染したからといって全員が発症するわけではない。マクロファージは結核菌を貪食するが、結核菌を死滅させることができず、ラングハンス巨細胞や類上皮細胞となり肉芽腫granulomaを形成し組織はチーズ状の乾酪壊死を呈する。肉芽腫は結核やサルコイドーシスでしかみられず、内側はマクロファージや好中球を中心とした自然免疫、外側はTリンパ球やBリンパ球を中心とした獲得免疫で構成される病態である。Th1細胞が産生するインターフェロンγが結核感染の診断に用いられる。',
    },
    {
      term: ['関節リウマチ', "Rheumatoid arthritis"],
      explanation: '患者数60~100万人と特に多く、患者の80%は女性の自己免疫疾患。関節リウマチではTh17が増えてくるので、治療にはIL-6に対する抗体や、TNF-αに対する抗体を用いることが多い（生物学的製剤抗サイトカイン療法）',
    },
    {
      term: ['Treg', "制御性T細胞", "IPEX"],
      explanation: '制御性T細胞は未成熟T細胞からFoxp3発現によって分化が誘導される。内在性Treg（胸腺で負の選択で落ち込んでしまったT細胞から分化）と誘導性Treg（T細胞から誘導されて分化）に分類される。Tregは抗原提示細胞においてCD80/CD86などのB7ファミリーの発現を低く抑えることによって他のT細胞の活性化に必要な複刺激を提供できなくしたり、T細胞増殖に必要なIL-2を横取りしてT細胞増殖を抑えたりすることによって、免疫を抑制する役割をもつ。Tregが欠損する（Foxp3遺伝子の変異）ことでIPEXという自己免疫性疾患を引き起こす。Tregは胎児の免疫学的拒絶の阻止機構に関与していて、妊娠初期の妊婦末梢血中にはCD4+T細胞中にTregが約9%(通常の2倍)含まれていて妊娠維持に寄与しているというデータがある。妊娠中になると末梢血中のTreg(iTreg)が子宮（脱落膜）に集積してきていると考えられている。',
    },
    {
      term: ["CD8+ Killer T cell", "CD8+T細胞"],
      explanation: 'MHC classⅠを認識して障害細胞を直接認識し、Perforin,Granzyme,FasLなどの細胞障害因子を介して障害細胞を直接殺傷したり、IFN-γや TNF-αなどのサイトカインを介して増殖を抑制したりする細胞障害性T細胞。ウイルス感染細胞や腫瘍細胞を細胞死させる役割を担う。腫瘍細胞排除の主役。',
    },
    {
      term: ['CAR-T', "キムリア"],
      explanation: '白血病のがん細胞を標的として攻撃するためにCARを発現したNKT細胞を培養して、患者の体内に戻すがん治療薬。血球系がんには有効だが、固形腫瘍には届かず予後が悪い。がん細胞に対する高い特異性を持つCAR遺伝子を選択することが難しく、治療は非常に高額。キムリアはCAR-Tを用いた商品の名前。',
    },
    {
      term: ['メモリーT細胞'],
      explanation: '役割を果たしたT細胞の多くは死滅するが、一部は臓器（→TEM/エフェクターメモリーT細胞）やリンパ節（→TCM/セントラルメモリーT細胞）に記憶細胞（メモリーT細胞）として残る。2回目の接種で出た抗体が重要であることが今回の新型コロナワクチンの明らかとなった。',
    },
    {
      term: ['活性化経路', "ALternative pathway", "Lectin pathway", "Classical pathway"],
      explanation: '補体の活性化経路は連鎖反応で、3つの経路が存在する。基本的に病原体侵入に対して最初に働くのが第二経路(Alternative pathway)。2番目に働くのがレクチン経路、3番目に働くのが抗体やCRPがトリガーとなる古典的経路(Classical pathway)。補体活性化によって、炎症細胞が動員されたり、食細胞による貪食や殺傷の促進（オプソニン作用）や、病原体の細胞に穴をあける（溶菌）ことによって病原体の死滅を誘導する。過剰に発現すると補体依存性細胞障害:complement-dependent cytotoxicityを招くこともある。C3aやC5aが作用しすぎるとアナフィラキシーショックを招くことになる。',
    },
    {
      term: ['補体依存性細胞障害', "溶菌", "complement-dependent cytotoxicity", "bacteriolysis", "MAC", "membrane attack complex"],
      explanation: '補体のC5が転換酵素に結合したC5bに様々な補体が結合する事によって、細胞膜に穴をあける膜攻撃複合体/膜侵襲複合体/MACを形成する。MACは補体だけで細胞を溶かすことができる。補体の活性化経路の最終産物。',
    },
    {
      term: ['アナフィラトキシン', "C3a", "C5a"],
      explanation: '補体であるC3は血漿中の酵素（C3転換酵素/iC3BbやC4b2aなど）によって切断され、C3aとC3bに分解されるが、C3aは病原体から遊離してアナフィラキシーショックを引き起こす原因となる→アナフィラトキシン。C3bは病原体表面へ結合する。C3b2個とBb因子の複合体はC5補体をC5a（→遊離しアナフィラキシーショックの原因に）とC5bに分離する。',
    },
    {
      term: ['プロペルジン', "properdin"],
      explanation: '補体の活性化を引き起こす第二経路の過程で、C3bBb複合体(C3から分解されたC3bとB因子から分解されたBb因子の複合体)を安定化させ反応を進める因子（P因子:P factor）。',
    },
    {
      term: ['C3d'],
      explanation: 'B細胞のレセプターCR1にC3bが結合するとI因子（補体抑制性）が産生され、菌体表面でC3bの分解が進みC3dとなる。このC3dによって病原体が逃れることを防ぐためB細胞が認識し免疫応答を引き起こす。',
    },
    {
      term: ['CD46', "CD55", "CD59", "MCP", "DAF", "HRF", "補体制御分子"],
      explanation: '正常細胞が補体系による細胞障害を受けないように、補体制御分子を発現する。これらはヒト固有で、異種細胞では種類や型が違っていて、補体の標的となる。そのうちCD59/Protectin/HRFは膜侵襲複合体MACを抑制することによって補体を不活化している。',
    },
    {
      term: ['C1-INH', "C1 inhibitor", "SERPING1"],
      explanation: 'C1-INHは補体C1に働く酵素を不可逆的に遊離させることによって、古典経路やレクチン経路での補体の過剰活性化を抑制している。このC1-INHが欠損するとキニン系が制御できず遺伝性血管性浮腫を発症する。',
    },
    {
      term: ['C3bBb', "C4b2a"],
      explanation: 'C3転換酵素のうち、第二経路で生成されるのがC3bBb、レクチン経路・古典経路で生成されるのがC4b2a。いずれもC3をC3a→遊離とC3b→連鎖的な反応の継続に分離させる作用を持ち、補体不活化のターゲットとなる。',
    },
    {
      term: ['Sタンパク質', "Clusterin", "vitronectin", "ビトロネクチン"],
      explanation: 'いずれも膜侵襲複合体MACの形成を抑制することで補体反応を抑制する。正常細胞で補体反応が進行し、傷害されるのを防いでいる。',
    },
    {
      term: ['carboxy-peptidase', "C3a-INA"],
      explanation: 'アナフィラトキシン(C3a,C5a)不活化因子',
    },
    {
      term: ['免疫複合体の可溶化'],
      explanation: '補体の働き。抗原抗体反応が組織に沈着すると好中球などが反応し組織障害が起こることがあるので、補体が抗原に結合することによって免疫複合体が小さくする（免疫複合体の可溶化）。',
    },
    {
      term: ["遺伝性血管性浮腫", "hereditary angioedema", "HAE"],
      explanation: 'C1-INH欠損によりC2bの過剰・持続作用が原因で高分子キニンからブラジキニン産生・C2キニン産生を伴う接触システムの自然活性化によって血管性浮腫angioedemaが引き起こされる疾患。この疾患は片アレルの欠損に伴う疾患であり、対立遺伝子は正常であるため、即時に致命的になるわけではない。',
    },
    {
      term: ['PNH', "paroxysmal nocturnal hemoglobinuria", "発作性夜間ヘモグロビン尿症"],
      explanation: '造血幹細胞でGPIアンカー生合成に関わるPIG-A遺伝子の体細胞突然変異により、DAFとCD59（いずれも補体活性化を抑制する因子）の発現異常を引き起こし、補体活性化により夜間にヘモグロビンが破壊されてヘモグロビン尿が排泄される。赤血球だけではなく白血球、血小板も破壊され減少する。尿上清のヘモグロビン陽性、尿沈渣のヘモジデリン陽性によって診断される。夜間に血液のpHが低下したり、感染に伴う微生物への反応によって、補体が活性化されることによって補体溶血が起こると言われている。',
    },
    {
      term: ['補体結合法', "complement fixation test", "CF"],
      explanation: '抗原抗体複合体に補体が結合し、その補体が消費される反応を利用して、抗体の測定法として使用されている。梅毒・麻疹ウイルス・ムンプスウイルス・水痘ウイルス・サイトメガロウイルス・インフルエンザウイルスなど様々なウイルスの診断に利用されている。',
    },
    {
      term: ['NK細胞'],
      explanation: 'NK細胞はMCH class1分子を認識する受容体を発現していて、MHC Class1分子の発現が低下したがん細胞を認識して活性化する→missing self仮説。NK細胞は様々なHLA分子をリガンドとする活性型＆抑制型の両方のレセプターを発現している。普通はCD56dim型NK細胞（CD56が少し発現していてバーフォリン・グランザイムBを細胞内に持つ）脱落膜では免疫寛容のため、ほとんど(80%)がCDD56bright型NK細胞(パーフォリン・グランザイムBを細胞内に持たない)である。脱落膜NK細胞はEVTと協調して、胎盤に母体血が十分に供給されるようにする。胎盤では主にHLA-EがNK細胞を抑制する。',
    },
    {
      term: ['HLA-G'],
      explanation: 'HLA=Gは胎盤の免疫学的拒絶の阻止機構に関与していて、LILRB1・B2を介してNK細胞・T細胞・DC・マクロファージを抑制する。結果的にTれｇの活性化を引き起こしたり、抗原提示機能の抑制・CD80/CD86分子の抑制によって免疫を抑制する。',
    },
    {
      term: ['妊娠中毒症', "妊娠高血圧症候群", "pregnancy-induced hypertension", "PIH"],
      explanation: '妊娠後期（20週）以降、分娩後12週までに高血圧が見られる場合、または高血圧にタンパク尿を伴う場合、慢性拒絶反応を発生機序として考えることがある。',
    },
    {
      term: ['HDN', "hemolytic disease of the newborn", "新生児溶血性疾患"],
      explanation: '両親の血液型(AB,Rh)不適合妊娠の際に問題となる。抗RhD抗体などが原因。１度目の出産などで胎児から出血することなどが原因。',
    },
    {
      term: ['クームス試験', "coombs test"],
      explanation: '血液中の不完全抗体の有無を調べる検査法。赤血球の細胞膜に免疫グロブリン抗体が結合しているか否かを調べる試験。不完全抗体は単独で血球凝集できないが、赤血球に結合している場合、赤血球が凝集するので検出することができる。直接クームス試験では赤血球表面に結合している抗体を検出するのに対して、間接クームス試験は血清中の抗赤血球抗体を検出する。',
    },
    {
      term: ['TRAIL', "TNF-related apoptosis inducing ligand", "Fas"],
      explanation: 'Fas分子を発現したリンパ球はアポトーシスによる細胞死を引き起こす。人では、トロホブラストにTRAILが発現していて、活性化リンパ球に細胞死を誘導することによって、胎児の免疫学的拒絶の阻止機構に寄与している。',
    },
    {
      term: ['原発性習慣性流産', "habitual abortion"],
      explanation: '他に原因が無く流産を反復する場合、妊娠免疫機構がうまく機能しないため、免疫学的拒絶反応が起こると考えられている。両親のHLA Class2の一致率が高いほど、遮断抗体が産生されないため、妊娠初期に習慣性流産が生じやすい。',
    },
    {
      term: ['KAR', "Killer Activation Receptor"],
      explanation: 'Killer Activation Receptors (KARs) are receptors expressed on the plasmatic membrane of Natural Killer cells (NK cells). KARs work together with inhibitory receptors (abbreviated as KIRs in the text),',
    },
    {
      term: ['GVHD', "graft-versus-host disease", "同種免疫による臓器障害"],
      explanation: 'T細胞は白血病細胞も識別することもできるため、白血病の治療のために同種造血幹細胞移植が行われることがあるが、移植されたT細胞がターゲット以外を攻撃してしまうこともあり、臓器障害が生じることをGVHDという。急性の場合は皮膚・肝臓・消化管の上皮細胞が標的となり、慢性の場合は多臓器が繊維化したりする。急性GVHDは移植前処置による組織障害により炎症性サイトカインの産生誘導とそれに伴う免疫活性化や、障害部位への感染などが原因とされている。急性GVHDを発症した患者では、血球分化を促進する骨芽細胞がドナーのCD4+T細胞に攻撃されT細胞やB細胞の免疫再構築（末梢組織へ戻ってくる・胸腺などでの増殖）が遅れたり、液性免疫誘導の場であるリンパ節が(ドナーのCD8+T細胞に攻撃され)障害されることがわかってきていて、CD4抗体によって予防できるのではないかと期待されている。',
    },
    {
      term: ['臓器移植', "organ transplantation"],
      explanation: '我が国における臓器移植後の生存率は移植後5年で8割以上となってきていて、成功率向上の背景には免疫学の進歩がある。臓器移植には異株移植(Xeno)・同種移植・自家移植に分類される。自家移植以外の場合は免疫学的バリアが存在し、感染症にも気をつけなければならない。1954年に一卵性双生児の間で初めて、1967年には同種移植間で初めて肝臓の臓器移植に成功した。2022年に豚から人への心臓移植に初めて成功し、移植後２ヶ月間の生存（その後ブタ固有の感染症に罹患？）に成功した。この背景には遺伝子編集技術の進歩が貢献している。異株移植における今後の課題として、ドナー組織から流入する潜在型ウイルス(Cytomegalovirusなど)への対応・豚非交差遺伝子への対応（複雑な臓器は難しい）が提唱されている。',
    },
    {
      term: ['近交系', "inbred"],
      explanation: '近親交配を20世代以上継続して得られた、遺伝子的なバックグラウンドが確立された動物。実験用マウスとして用いられる。臓器移植の移植反応の研究に用いられた。',
    },
    {
      term: ['急性拒絶'],
      explanation: '移植後24時間以内に起こる拒絶反応を超急性拒絶と言い、糖鎖などに対する抗体が血管内で血栓を作る。一方で7日〜100日程度で起こる拒絶反応を急性拒絶という。急性拒絶には直接抗原提示(レシピエントT細胞がドナーのMHCそのものを遺物として認識する)が関与していると言われている。急性拒絶は免疫抑制剤でコントロールできるようになってきている。',
    },
    {
      term: ['慢性拒絶'],
      explanation: '移植後100日以上かけて、ゆっくり進行する拒絶反応。間接抗原提示(レシピエントT細胞がドナーのMHC-MHC由来ペプチドや、MHC-minor HA由来ペプチドを遺物として認める)が関与していると言われている。',
    },
    {
      term: ['血液型抗原', "blood group antigen"],
      explanation: 'ABO型抗原のほか、Rh抗原、Lewis抗原などが知られている。臓器移植の際に血液型抗原でも不一致の場合問題が生じるが、現在では免疫抑制剤などによる予防ができるようになってきている。',
    },
    {
      term: ['allo-HSCT', "allogenic hematopoietic stem cell transplantation", "同種造血幹細胞移植"],
      explanation: '白血病・悪性リンパ腫・再生不良性貧血などを対象に行われる、造血幹細胞移植。現在でも予後は芳しくなく(五年生存率50%)、白血病の再発や感染症(移植関連死)を防ぐ努力が続けられている。',
    },
    {
      term: ['造血細胞ニッチ', "hematopoietic niche"],
      explanation: '骨髄には血球系の他、線維芽細胞・内皮細胞・骨芽細胞などの豊富なニッチが存在する。',
    },
    {
      term: ['CTLA-4', "PD-1", "Ipilimumab", "Nibolumab"],
      explanation: '腫瘍細胞のCD80/86は制御性T細胞のCTLA-4と、腫瘍細胞のPD-L1は活性化T細胞のPD-1と結合すること（免疫チェックポイント）によって、CD28-CD80/86を介した抗原提示の共刺激因子の活性を抑制され腫瘍細胞は腫瘍免疫から逃れることができる。抗CTLA4抗体(ipilimumab)や抗PD-1抗体(nivolumab)は免疫チェックポイント阻害剤と呼ばれ、がん治療の化学療法（免疫療法）で中心的に活用されている。最近では併用療法の研究も進んできている。副作用として消化管などで生じる自己免疫症状があり、これの早期診断・治療を可能とする体制も重要である。ミスマッチ修復機構を持っている腫瘍細胞には効果がないと言われている。',
    },
    {
      term: ['CT抗原', "cancer-testis", "がん・精巣抗原"],
      explanation: '免疫系が認識するがん抗原の一つ。メラノーマなどの特定の癌腫では、正常組織では精巣のみで発現する抗原を発現していて、免疫系による認識を受ける。',
    },
    {
      term: ['TAM', "腫瘍会合性マクロファージ"],
      explanation: 'TAMは成熟にともないMHC classⅡや共刺激因子を発現する。種々の免疫抑制物質を産生し免疫を抑制したり、血管新生・組織再構築の誘導因子を産生することで、腫瘍細胞増殖を促進してしまう。',
    },
    {
      term: ['抗CD4抗体'],
      explanation: 'CTLA-4と同じ免疫チェックポイントに作用する別の因子に対する抗体。がん治療における免疫治療に利用される試みが行われている。',
    },
    {
      term: ['HPD', "Hyper progressive disease"],
      explanation: 'がん治療において免疫治療を行った直後にがんが増悪する症状。免疫治療の1~2割で起こる。',
    },
    {
      term: ['免疫遮断腫瘍'],
      explanation: '炎症性腫瘍と比べて免疫細胞が少なく、中心部にまで届いていない。比較的変異の多い腫瘍細胞に多いとされる。腫瘍に反応する免疫細胞が少ないので、免疫療法の効果を得にくい。',
    },
    {
      term: ['個別化mRNAワクチン'],
      explanation: 'がんに対するワクチン。主要特異的な遺伝子に対するmRNAを患者に注射することで、腫瘍に対する免疫応答を期待する方法。',
    },
    {
      term: ['可変領域', "variable region", "V領域"],
      explanation: '抗体のアミノ末端側。抗原認識に関与していて、抗体分子によってそれぞれ異なっている。',
    },
    {
      term: ['可変領域', "consistant region", "C領域"],
      explanation: '抗体のC末端側。抗体のエフェクター機能に関与し、各クラスで共通している。',
    },
    {
      term: ['クローン'],
      explanation: '同一のBCR（TCR）を発現するB細胞・T細胞はクローンと呼ばれる。クローンは同一の抗原に対して結合し、病原体が侵入すると親和性の高いB細胞クローンが選択され、活性化される',
    },
    {
      term: ["SHM", '体細胞突然変異', "somatic hyper mutation"],
      explanation: '胚中心B細胞は、二次リンパ組織の暗領域での増殖中に体細胞突然変異を起こす。変異後は明領域にてIg親和性の高いクローンが選択的にFDCやTfh細胞からの生存シグナル（抗アポトーシス分子）を受けることで、体細胞突然変異はアフィニティ成熟に関与する',
    },
    {
      term: ['濾胞B細胞', "Follicular B cell", "FoB", "再循環B細胞"],
      explanation: '二次リンパ組織であるリンパ節や脾臓の中で、B細胞が分布する領域を濾胞といい、濾胞にあるB細胞は濾胞B細胞と呼ばれる。B細胞はHEVから二次リンパ組織へ移動（ホーミング）するためには、CCL19/21やLセレクチンリガンド（これらはT細胞と共通）だけでなく、濾胞樹状細胞のCXCL13の発現が必要である。B細胞はこの時CCR7やLセレクチン、CXCL5を発現する。一つのリンパ組織から別のリンパ組織へ移動することから、再循環B細胞とも呼ばれ、抗原に対する高親和性抗体の産生に重要である',
    },
    {
      term: ['Igα', "Igβ"],
      explanation: '幕型Igは細胞室内に活性化モチーフ(ITAM)を持つ刺激補助因子Igα・Igβと会合しBCRを形成していて、この活性化モチーフがリン酸化を受けることでリン酸化カスケードが開始し、さまざまな転写因子の活性化を起こすことで、B細胞が活性化される。',
    },
    {
      term: ['TD抗原', "T細胞依存性抗原"],
      explanation: 'B細胞はT細胞とは異なり二次リンパ組織で光源を直接BCRで認識して活性化するが、タンパク抗原はB細胞の活性化が弱く、強力な抗体を産生するにはヘルパーT細胞による付加的活性化が必要。B細胞は抗原を取り込み濾胞ヘルパーT細胞に抗原提示することで活性化され、TD抗原に対する抗体産生を行うことができる。二次応答の際に免疫応答が増強されるのはこのようなタンパク抗原のみ。',
    },
    {
      term: ['X-SCID', "X連鎖重症複合免疫不全症", "severe combined immunodeficiency"],
      explanation: '一部のサイトカイン受容体はサブユニットを共有していて、この共通γ鎖ファミリーの異常によりX-SCIDを引き起こす。',
    },
    {
      term: ['クラススイッチ', "アイソタイプスイッチ"],
      explanation: '成熟B細胞はCD40シグナルとサイトカイン（IFNγ,IL-4,TGF-β）に反応し、H鎖のアイソタイプスイッチ（クラススイッチ）を引き起こす。アイソタイプスイッチはAID（シチジン脱アミノ化酵素）が活性化B細胞特異的に働くことで始まる。クラススイッチ前はIgMやIgDを産生していたB細胞から、IFN-γはIgGへ、IL-4はIgEへ、TGF-βはIgAへのクラススイッチを引き起こす。クラススイッチの機構はVDJgermline transcriptsがまず翻訳され、これがコード鎖としてRループを形成しているところにAIDが働き異なるS領域の切断・再結合を誘導する。',
    },
    {
      term: ['AID', "シチジン脱アミノ化酵素", "activation-induced cytidine deaminase"],
      explanation: '体細胞突然変異とアイソタイプスイッチの開始に必要な、シチジンを脱アミノ化する酵素。',
    },
    {
      term: ["スイッチ領域", "switch region"],
      explanation: 'H鎖遺伝子座のVDJセグメントの下流に位置する、Cセグメントそれぞれの上流に存在し、クラススイッチ時にC遺伝子除去の標的となる。クラススイッチには、スイッチ領域のほか、生殖細胞系ε転写と、シチジン脱アミノ化酵素AIDが必要となる。',
    },
    {
      term: ['CD40',"CD40L"],
      explanation: 'CD40はB細胞に発現し、CD40LはTh細胞に発現していて、成熟B細胞のアイソタイプスイッチ（クラススイッチ）の開始に必要。CD40とIL-21の刺激によってシチジン脱アミノ化酵素AIDが働く。',
    },
    {
      term: ['生殖細胞系転写産物', "germline transcripts"],
      explanation: 'B細胞H鎖クラススイッチの時に最初にε遺伝子座までの転写産物：生殖細胞系転写産物が生成される。この産物はその後スイッチ領域に結合してR-ループを形成することによって、AIDやUNGによるDNA二本鎖切断切断を誘導する。',
    },
    {
      term: ['Bcl-2', "抗アポトーシス分子"],
      explanation: '胚中心B細胞が高親和性クローン選択の際に、濾胞樹状細胞FDCやTfh細胞から受ける生存シグナル。胚中心B細胞は二次リンパ組織の明領域にてTfh細胞などに抗原提示を行うことによって、親和性のより高い細胞を選択する。',
    },
    {
      term: ['形質細胞', "プラズマ細胞", "LP細胞", "多発性骨髄腫"],
      explanation: '活性化B細胞は形質細胞に分化し、抗体（分泌型Ig）を大量に産生する。TD抗原による胚中心免疫応答(Tfhへの抗原提示)で誘導される形質細胞はCXCR4を発現して骨髄へと移行し、長期に生存して抗体を産生し続け、長期生存形質細胞とも呼ばれる。→TI抗原では長期生存形質細胞が生成されず、免疫記憶が維持されない。このような形質細胞ががん化すると多発性骨髄腫と呼ばれる。',
    },
    {
      term: ['CXCR4', "CXCL12"],
      explanation: 'CXCR4は骨髄へ移行する際に利用されるケモカインレセプター。形質細胞などが発現。骨髄には対応するケモカインであるCXCL12が分泌されている。',
    },
    // {
    //   term: ['メモリーB細胞', "記憶B細胞", "Bm cell"],
    //   explanation: '',
    // },
    // {
    //   term: ["FCγRⅡB", "抑制性Fcγ受容体", '抗体フィードバック', "全身性エリテマトーデス", "SLE"],
    //   explanation: '',
    // },
    // {
    //   term: ['二次応答', "二次免疫応答"],
    //   explanation: '',
    // },
    {
      term: ['TI抗原', "T cell-independent antigen", "T細胞非依存性抗原", "TI-1", "TI-2"],
      explanation: 'タンパク抗原（TD抗原）はヘルパーT細胞の補助を受けられるが、タンパクではない抗原：TI細胞は、ヘルパーT細胞の補助は受けることなく抗体産生を誘導する。TI抗原は抗体のクラススイッチ・親和性成熟・記憶B細胞は誘導されにくい。TI抗原はTI-1抗原（直接B細胞を活性化させる、LPSや細菌DNAなど）とTI-2抗原（反復性の高い構造を有しBCRを強力に架橋することで活性化を引き起こし、B1細胞やMZB細胞が主に反応する、肺炎連鎖球菌の莢膜多頭など）に分類される',
    },
    // {
    //   term: ['辺縁帯B細胞', "MZB", "Marginal zone B cell"],
    //   explanation: '',
    // },
    // {
    //   term: ['B1細胞', "B1B細胞"],
    //   explanation: '',
    // },
    {
      term: ["B2細胞", "B2B細胞"],
      explanation: '通常のB細胞のことで、胎児期に肝臓造血幹細胞から発生する未熟なB1細胞に対してB2細胞と呼ばれる。B1細胞と比較してよりシステマティックな構造・機能を持つ。二次リンパ組織では濾胞に存在している。',
    },
    // {
    //   term: ['Ⅱ型アレルギー'],
    //   explanation: '',
    // },
    // {
    //   term: ['Ⅲ型アレルギー'],
    //   explanation: '',
    // },
    // {
    //   term: ['モノクローナル', "モノクローナル抗体", "mAb"],
    //   explanation: '',
    // },
    {
      term: ['ポリクローナル', "ポリクローナル抗体"],
      explanation: '血中に一般的に存在する抗体で、複数のクローンから構成される。',
    },
    // {
    //   term: ['ELISA'],
    //   explanation: '',
    // },
    // {
    //   term: ['モノクローナル抗体のヒト化', "ヒト化", "完全ヒト抗体"],
    //   explanation: '',
    // },
    // {
    //   term: ['トシリズマブ', "Tocilizumab", "抗IL-6受容体抗体", "キャッスルマン病"],
    //   explanation: '',
    // },
    {
      term: ['ポテリジェント抗体'],
      explanation: '抗体の、Fc受容体との会合を阻害するフコースを除去することによりADCC活性が増強される。このような抗体をポテリジェント抗体と言い、ATL（成人T細胞白血病リンパ腫）の治療に活用されている。',
    },
    // {
    //   term: ['ハイブリドーマ'],
    //   explanation: '',
    // },
    // {
    //   term: ['経口寛容', "食物アレルギー"],
    //   explanation: '',
    // },
    {
      term: ['粘膜関連リンパ組織', "Muclsa-Associated Lymphoid TIssue", "MALT", "GALT", "BALT", "NALT"],
      explanation: '上皮直下の実行組織の近傍の二次リンパ組織の総称。',
    },
    {
      term: ['拘禁ペプチド', "ディフェンシン", "defensin", "RegⅢ"],
      explanation: 'クリプトのパネート細胞（小腸）や吸収上皮細胞（大腸）は抗菌ペプチド（ディフェンシン・Reg3）を分泌している。',
    },
    {
      term: ['舌下減感作療法'],
      explanation: '花粉症などの治療（免疫寛容獲得）などに利用される。',
    },
    // {
    //   term: ['CMIS', "共通粘膜免疫機構", "common muclsal immune system"],
    //   explanation: '',
    // },
    // {
    //   term: ['パイエル板'],
    //   explanation: '',
    // },
    // {
    //   term: ['"M細胞","microfoid cell","GP2タンパク"'],
    //   explanation: '',
    // },
    // {
    //   term: ['IgA', "Immunoglobrin A", "多量体Ig受容体"],
    //   explanation: '',
    // },
    // {
    //   term: ['レチノイン酸', "ビタミンA"],
    //   explanation: '',
    // },
    // {
    //   term: ['粘膜固有層選択的ホーミング', "CCR9", "CCL25", "α4β7", "MadCAM"],
    //   explanation: '',
    // },
    // {
    //   term: ['IEL', "腸管上皮間リンパ球", "intraepithelial lymphocyte"],
    //   explanation: '',
    // },
    // {
    //   term: ['軟膜固有層リンパ球', "lamina propria lymphocyte"],
    //   explanation: '',
    // },
    {
      term: ['Th17'],
      explanation: '真菌に対する免疫応答に重要な役割を果たしている他、腸管上皮で',
    },
    {
      term: ["ILC", '自然リンパ球', "innate lymphoid cell"],
      explanation: '腸管粘膜固有層には3型のILCが存在していて、　　　T細胞のような役割をするものの抗原特異性は全くない。',
    },
    // {
    //   term: ['Disbiosis', "腸内細菌叢の異常"],
    //   explanation: '',
    // },
    // {
    //   term: ['IBD', "炎症性腸疾患", "クローン病", "潰瘍性大腸炎"],
    //   explanation: '',
    // },
    {
      term: ['粘膜ワクチン', "経口ワクチン", "MucoRice-CTB"],
      explanation: '経口投与などによって抗原を粘膜関連リンパ組織に取り込ませて、粘膜局所ならびに全身性に免疫応答を誘導する形式のワクチン。ポリオ生ワクチンなどで利用されていた。粘膜ワクチンは一般的な注射型ワクチンと比べて、注射の苦痛を伴わない上、粘膜組織での予防効果も期待でき、同じように全身組織の免疫応答も損なわないという利点がある。これを利用して、コレラ毒素（CTB）をワクチン抗原としたコメ型ワクチン：MucoRice-CTBが商品化されている。',
    },
    {
      term: ['二重抗原暴露仮説', "dual allergen exposure hypothesis"],
      explanation: '特定の食物摂取を制限すると食物アレルギーが増えるとする仮説。アレルゲンの経皮的接触が感作を惹起し、経口摂取によりアレルギーを引き起こす。食物に対する経口免疫寛容は食物アレルギーにも有効であるという臨床結果も出ている。',
    },
    {
      term:['飲作用',"pinocytosis"],
      explanation:'食作用とは違ってほぼすべての細胞が行う、細胞外液を取り込むことで、細胞に必要な水溶性の栄養分などを取り込む。',
    },
    {
      term:['好中球',"neutrophil"],
      explanation:'白血球。顆粒球の一つで、通常は白血球で最も多い種類。細胞を貪食する自然免疫に関わる。貪食に抵抗する結核菌・サルモネラ・リステリア・真菌は苦手としている。血管壁の隙間からアメーバ運動で外へ遊走することがある。細菌感染症が起きると産生が間に合わず、未分化な白血球が抹消血中で確認されることがある（左方移動）。好中球は菌体成分のLPS・リポタイコ酸・マンノース・βDグルカンなどを認識するほか、様々な血漿タンパクを介した認識も行っている。莢膜を持つ細菌や陰性荷電している物質に対しては好中球は認識しにくいが、オプソニン化により認識しやすくする機構もある。',
    },
    {
      term:['ローリング',"rolling"],
      explanation:'血管内を流れる好中球などが感染を起こした部位（通常は血管外）へ移動するための方法。ローリング(セレクチン)→接着(インテグリン)→遊出の過程を経る。刺激された好中球はローリングに必要な受容体を多く発現するようになる。',
    },
    {
      term:['NETs',"neutrophil extracellular traps"],
      explanation:'活性化した好中球が、細胞外に形成する繊維状の構造物。網で細菌を捕捉し、ペプチド・酵素によって菌を殺す作用をNETosisという。',
    },
    {
      term:['ROS',"活性酸素"],
      explanation:'好中球のファゴサイトに含まれる殺菌成分。スーパーオキシド・ヒドロキシラジカルなどを、白血球は酵素(phagocyte oxydase:NADPH系とmyeloperoxidase系)を用いて産生している。',
    },
    {
      term:['ホスファチジルセリン'],
      explanation:'Eat meシグナル。死んだ細胞にしか表出しない。ホスファチジルセリンを表出するとマクロファージが来て貪食され、処理される。',
    },
    {
      term:['M2マクロファージ'],
      explanation:'炎症を促進するM1マクロファージとは異なり、組織修復（血管新生など）を目的とするマクロファージが存在し、主に免疫抑制に働く。炎症性マクロファージが免疫応答を起こした後の組織に出現する。',
    },
    {
      term:['化膿性細菌'],
      explanation:'グラム陰性桿菌は表面に内毒素を産生しており、ジフテリア・コレラなどは外毒素を産生する。これらのような化膿性細菌は内毒素や外毒素によって組織破壊を引き起こす。細菌による免疫逃避を持っていたり、過度な免疫を誘導したりする。',
    },
    {
      term:['肺炎球菌'],
      explanation:'代表的なグラム陽性球菌で、肺炎以外にも髄膜炎・中耳炎などを招く。莢膜が自然免疫に対する認識を抑制していて、補体の活性化も抑制されているため、抗体によるオプソニン化が非常に重要である。',
    },
    {
      term:['細胞内寄生菌'],
      explanation:'細胞内で増える細菌：結核・リステリア・レジオネラ・サルモネラなどは貪食されにくかったり、貪食されても殺菌を免れたりすることで、マクロファージによる自然免疫を回避する。感染した細胞を除去する機構が誘導されたり肉芽種が形成される。',
    },
    {
      term:['中和抗体'],
      explanation:'ウイルスに直接作用して失活化させる抗体。細胞は関与しない。',
    },
    {
      term:['COVID-19',"新型コロナ"],
      explanation:'TMPRSS2というプロテアーゼによってウイルス表面のスパイク蛋白が構造変化しACE2という受容体経由でウイルスと宿主細胞膜と融合することによって感染（ウイルス侵入）が成立する。重症化するとARDSを発症する。',
    },
    {
      term:['VOC',"variant of concern"],
      explanation:'ウイルス変異株のうち、深刻な変異を起こしているものはVOCに分類される。COVID-19のオミクロン株など',
    },
    {
      term:['mRNAワクチン'],
      explanation:'mRNAを脂質で包んだワクチン。新型コロナウイルスに対するワクチンとして初めて実用化された。脂質で包む理由として、mRNAが体内では破壊されやすく、翻訳される前に自然免疫系による排除を受けてしまう→自然免疫系を過度に刺激してしまう。感染の再現度は生ワクチンより低いが、不活化ワクチンと比べると高い。CD8+T細胞（細胞性免疫）とCD4+T細胞（液性免疫）の両方が効果的に活性化されると考えられている。',
    },
    {
      term:["AIDS","後天性免疫不全症候群","MSM"],
      explanation:'AIDSはヒト免疫不全ウイルスHIVによって引き起こされる、後天性免疫不全症候群。初の症例報告から40年。感染から数年〜１０数年でCD4+T細胞数が200/μLを下回るとAIDS指標疾患（ニューモシスチス肺炎・カンジダ症）を発症し、AIDSに気づく患者が多い。世界では約3800万人の患者がいて、ほとんどがサハラ以南アフリカに集中していて、うち75%が治療を受けており、うち170万人が子供の感染者である。日本では新規感染者は年1200人程度であるが、診断時にいきなりAIDSを発症している人が1/3を占める。日本の新規患者の95%は男性で、MSM（男性と性交渉をもつ男性）に多い。血液・精液・膣分泌液に感染性があるが、汗・唾液・涙には感性性はない。治療されて十分にウイルスが抑えられていれば感染性はない。',
    },
    {
      term:['HIV',"ヒト免疫不全ウイルス"],
      explanation:'HIVはCD4+T細胞が標的のレトロウイルスで、CD4に結合する糖蛋白gp120や、共刺激因子（ケモカインレセプター）に結合する糖蛋白gp41を発現している。→ケモカインレセプターに変異を持っている人はHIVに感染しにくい。ウイルスRNAが逆転写されることによって、宿主のDNAに組み込まれる（インテグレーション）ので、完治はほとんど望めない。抗HIV剤は侵入・逆転写・インテグラーぜ・プロテアーゼの各段階を阻害するものが実用化されている。HIVは変異を起こしやすいので多剤併用が治療原則。HIVに初めて感染した場合に急性HIV感染症を発症する。',
    },
    {
      term:['サル痘',"mpox"],
      explanation:'性感染症のポックスウイルス。HIVを合併していることが多い。',
    },
    {
      term:['ART',"Anti Retroviral Therapy"],
      explanation:'HIVに対する治療。基本は3種類以上の薬剤を併用。',
    },
    {
      term:['天然痘',"smallpox"],
      explanation:'紀元前から知られた疾患で、致死率20-50%と言われる。ジェンナーにより、世界で初めて牛痘由来の生ワクチンが開発され、1980年に根絶が宣言された。潜伏感染が起こらず、変異が少なく、ヒト以外に宿主を持たず、強力なワクチンが存在することが要因。',
    },
    {
      term:['生ワクチン',"live-attnuated virus vaccine"],
      explanation:'弱毒化された、生きたウイルスを用いたワクチン。ポリオ生ワクチンでは一部にポリオ感染が起こされて中止に。不活化ワクチンと比べて感染の再現性が高いので反応が激烈になりやすく、感染のリスクもあるが、予防効果は高く長期間持続する。',
    },
        {
      term:['コンジュゲートワクチン'],
      explanation:'莢膜多糖は免疫原性が弱く、アジュバンド（タンパク質やトキソイド）と結合させて免疫原性を高めたワクチン。結合型ワクチンとも。',
    },
    {
      term:['アジュバンド'],
      explanation:'目的とする抗原だけを投与したのでは免疫が十分に刺激されない場合に、抗原に添加されてワクチンなどに利用される。肺炎球菌ワクチン（PPSV23に対する蛋白結合型ワクチンであるPCV13）など。',
    },
        {
      term:['風疹'],
      explanation:'重症度は高くないが、感染力が強く、先天性風疹症候群(TORCHのひとつ)が問題となる。感染者の1/1000人が死亡する。',
    },
    {
      term:['IHC',"Immunohistochemistry","免疫組織化学染色"],
      explanation:'細胞・組織内にある抗原に対して、特異的に反応する抗体を用いて、抗原物質の有無・局在を検討する方法。抗体を何らかの方法で標識し、これを検出・観察する。主な役割として病理診断など。',
    },
    //     {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },
        // {
    //   term:[''],
    //   explanation:'',
    // },
    // {
    //   term:[''],
    //   explanation:'',
    // },


  ])
  const showTechnicalTerm = () => {
    return technicalTerm.filter(
      (value) => value.term && value.term !== [] && value.term !== [''],
    )
  }
  return {
    showTechnicalTerm,
  }
}