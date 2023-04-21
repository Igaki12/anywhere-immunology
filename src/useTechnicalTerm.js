import { useState } from 'react'

export const useTechnicalTerm = () => {
  const [technicalTerm, setTechnicalTerm] = useState([
    // term[0]が代表名として大きく表示される。
    {
      term: ['HLA', 'Human Leukocyte Antigen'],
      explanation:
        '免疫系で自己と非自己を見分けるための因子。人の全ての有核細胞に存在しているClass1と、抗原提示細胞（樹状細胞・マクロファージ・活性化B細胞など）で発現しているClass2に分類される。対立遺伝子の組み合わせによってハプロタイプが決定されていて、兄弟間でHLAが一致する確率は約4分の1存在するが、HLAの組み合わせ自体は数万種類以上あり、赤の他人で一致する可能性はかなり低い。HLAの遺伝学的特性が、個人の疾病感受性・ひいては生存までをも左右する。',
    },
    {
      term: ['パターン認識レセプター', 'Pattern Recognition Receptor'],
      explanation:
        '細菌や人には存在していない特別なセンサー群で、各臓器のマクロファージで病原体を認識する。TLRs,CLRなど',
    },
    {
      term: [
        '病原体関連分子パターン',
        'Pathogen associated molecular patterns',
        'PAMPs',
      ],
      explanation:
        'PAMPsとも。人には存在せず、病原体にのみ存在し、これをパターン認識レセプターPRRが認識することによって、病原体の侵入を速やかに感知することができる。',
    },
    {
      term: [
        '抗体依存性細胞障害活性',
        'ADCC',
        'Antibody Dependent Cellular Cytotoxicity',
      ],
      explanation:
        '獲得免疫によって抗体が結合している細胞を、NK細胞が障害する機構。標的はがん細胞・細菌・ウイルス感染細胞など。',
    },
    {
      term: ['Cluster of differentiation', 'CD'],
      explanation:
        '細胞表面に存在する分子（表面抗原）に結合するモノクローナル抗体の国際分類。CD3はT細胞、さらにCD4はヘルパーT細胞、さらにCD8はキラーT細胞、CD19はB細胞、CD56はNK細胞、CD3とCD56を同時に持っている細胞はNKT細胞が保有している。表面マーカーの測定はフローサイトメトリー(Flow Cytometry)によって行われる。',
    },
    {
      term: ['フローサイトメトリー'],
      explanation:
        '細胞表面に対してレーザーを照射し、散乱光が前方に観測されるか、側方に観測されるかによって細胞表面を判別しようとする手法。',
    },
    {
      term: ['サイトカインストーム'],
      explanation:
        '感染症や薬剤投与などの原因により、血中サイトカイン（炎症性サイトカイン:IL-1,IL-6,TNF-αなど）の異常上昇が起こり、その作用が全身に及ぶ結果、敗血症性ショックを引き起こす。',
    },
    {
      term: ['サイトカイン', 'cytokine'],
      explanation:
        '細胞が産生する微量生理活性タンパク質の総称。100種類以上存在する。IFN、TNF、ILなど、機能は多岐にわたる。それぞれの名称に付いている数字は分子の同定順で、分子の機能と関連性があるわけではなく、また１つのサイトカインに複数の名称があり、複雑なネットワーク→サイトカインネットワークを形成している点が難しい。サイトカインの閾値thresholdはpg ~ ngオーダーであり、きわめて低量で、また特異的な受容体をもつ細胞だけに効果を発揮する。',
    },
    {
      term: ['インターロイキン', 'interleukin'],
      explanation:
        'サイトカインのうち、白血球相互の作動物質。造血系サイトカインとしてIL-5（肥満細胞・Th2→好酸球）、IL-7（骨髄・胸腺間質細胞→リンパ球）、IL-15（樹状細胞・マクロファージ→NK細胞）、抑制性サイトカイン（免疫応答における負のフィードバック）としてIL-10、炎症性サイトカインとしてIL-1、IL-6（←活性化マクロファージなど）などが知られる。',
    },
    {
      term: ['TLR', 'Toll-like Receptor'],
      explanation:
        '最も有名なパターン認識レセプターPRRで、PRRの代表格樹状細胞・マクロファージ・B細胞のような抗原提示細胞だけでなく、特定のT細胞や非免疫性細胞にも見られる。現在ヒトでは10種類同定されている。グラム陽性菌(TLR2)・グラム陰性菌(TLR4)・ウイルス(TLR3,7)などによって種類が異なる。TLRが活性化されると、TLR3以外はMyD88に依存する経路が活性化され、TLR3/TLR4はTRIF依存の経路が活性化される。ナイーブT細胞の選別にも関わっている。',
    },
    {
      term: ['LPS', 'リポポリサッカライド', 'Lipopolysaccharide'],
      explanation:
        'グラム陰性細菌の外膜成分として存在し、エンドトキシンの本体である。糖脂質/リポ多糖とも呼ばれ、O抗原多糖-コア多糖-脂質成分(Lopid A)で構成される。TLR4によって認識される。',
    },
    {
      term: ['TNF-α'],
      explanation:
        '感染部位に好中球と単球を動員・活性化させ、病原体の排除に働く、TLRなどによって病原体感染が認識されるとMyD88を介してNF-kBを活性化させることで産生される、炎症性サイトカインのひとつ。',
    },
    {
      term: ['IL-6'],
      explanation:
        'B細胞から抗体産生細胞への最終分化を誘導する因子の一つとして単離された。抗体産生誘導・急性炎症・Th17細胞分化・造血・血小板産生など多彩な生理機能を持つ炎症性サイトカインの一つである。機能が多岐に渡るため、IL-6アンプ（過剰産生：サイトカインストーム）による敗血症性ショックを引き起こす。',
    },
    {
      term: ['SIRS', 'systemic inflammatory response syndrome'],
      explanation:
        'サイトカインを中心とした免疫-炎症反応による非特異的な全身生体反応。感染症に起因するSIRSを敗血症と呼ぶ。',
    },
    {
      terms: ['敗血症性ショック', 'septic shock', 'SIRS', 'CARS'],
      explanation:
        '細菌感染により炎症性サイトカイン(TNF-α,IL-6,IL-1)の過剰産生が起きると敗血症性ショックを引き起こす。病原体由来PAMPs・炎症性サイトカイン・細胞障害により生じるDAMPs→サイトカインストーム→血管虚脱・代謝障害・播種性血管内凝固症DIC。過剰なサイトカインが分泌されている状態：Systemic Inflammatory Response Syndrome/SIRSと抑制されすぎている状態：Compensatory Anti-inflammatory Response Syndrome/CARSに分類され、より対処が難しいCARSの方が予後不良。',
    },
    {
      term: ['DAMPs', 'Damage-Associated Molecular Patterns'],
      explanation:
        '損傷組織または壊死に向かっている細胞から放出される分子機構。PAMPs（病原体由来）と同じくPRRs(TLRs,NLRs,RLRs)などの内因性リガンドとなる。',
    },
    {
      term: ['インターフェロン', 'IFN'],
      explanation:
        'インターフェロンはおよそ3種類存在し、Ⅰ型(IFN-α/IFN-β)とⅡ型(IFN-γ)に分類される。Ⅰ型は細胞を抗ウイルス状態にする/感染細胞がT細胞に傷害されやすいようにする作用をもち、Ⅱ型は免疫活性化や殺菌作用に働く遺伝子発現を誘導する。',
    },
    {
      term: ['ケモカイン', 'chemokine', 'CXCL', 'CCL'],
      explanation:
        '白血球遊走やリンパ球のホーミングに関わるサイトカイン。4つのタイプに構造的にわかれる。様々な白血球がケモカインに対するGタンパク共役受容体GPCR（7回膜貫通型）を持っていて、走化性を示す。白血球の局所浸潤だけでなく、リンパ球の二次リンパ組織へのホーミングにも必須で、臓器特異的ケモカインはT細胞とB細胞の局在化にも利用されている。ケモカイン受容体の異常により白血球の分布が乱され、HIVなどの感染の要因となる。',
    },
    {
      term: ['共刺激因子', 'Co-stimulatory molecule'],
      explanation:
        '古減の環化を受けていないナイーブT細胞のセレクションには、MHC複合体だけでなく共刺激因子を介した補助シグナルも必要となる。',
    },
    {
      term: ['RLR', 'RIG-I like receptor', 'Retinoic acid-Inducible Gene-I'],
      explanation:
        'パターン認識レセプターPRRsのひとつで、インフルエンザウイルス・センダイウイルス・ニューキャッスル病ウイルス・日本脳炎ウイルスなどのRNAウイルス認識に重要な役割を持つ。認識するとIPS-1/Interferon-β promoter stimulator 1を誘導し、Ⅰ型インターフェロンや炎症性サイトカインを産生するよう誘導する。',
    },
    {
      term: ['CLR', 'C-type lectin receptor'],
      explanation:
        'パターン認識レセプターPRRsのひとつで、CRD(carbohydrate recognition domain)を持ち、特に真菌Fungusの認識には重要な役割を担う。真菌や酵母の細胞壁に見られるβグルカン・真菌の細胞壁にも含まれる多糖類のα-マンナンがリガンドで、カンジダ血症の診断に用いられている。',
    },
    {
      term: [
        'NLR',
        'Nod-like receptor',
        'NOD様受容体',
        'Nucleotide binding oligomerization domain',
      ],
      explanation:
        '細胞内にある細菌認識機構で、全てNODモジュールを有している。NOD1/NOD2はペプチドグリカンをそれぞれ特異的に認識している。TLRのような細胞外領域ではなく、細胞質内で主に細胞内寄生細菌を認識する。',
    },
    {
      term: ['inflammation', '炎症'],
      explanation:
        '炎症は熱感heat、発赤redness、腫脹swelling、疼痛pain（と機能障害dysfunction）の計4~5つの主徴がある。身体のどの部分で起こってもこの反応は起こる。',
    },
    {
      term: ['arteriosclerosis', '動脈硬化'],
      explanation:
        '動脈の内膜に悪玉コレステロールが蓄積してマクロファージに取り込まれ、泡沫細胞Foam cellや血小板が血管を狭窄してしまう症状。ほとんど見えないはずの内膜に炎症反応が起こり肥厚してしまう。炎症は基本内膜のみで中膜は逆に薄くなることが多い。',
    },
    {
      term: ['metabolic syndrome', 'メタボリック症候群'],
      explanation:
        '内臓脂肪が蓄積した状態。脂肪細胞の肥大化・血管新生・マクロファージやリンパ球浸潤・細胞外マトリックスの過剰産生が起こり、様々な代謝異常を引き起こす。糖尿病・NAFLD（→NASH）・動脈硬化などの原因となる。',
    },
    {
      term: ['Spred2'],
      explanation:
        '炎症性サイトカインに反応してMAP Kinaseを活性化する経路を抑制する遺伝子。Spred2 KOマウスでは炎症・がんのシグナルのブレーキが効かなくなり、MAPK活性化ループによって、食餌性肥満が増悪し高脂肪食負荷時の脂肪織炎（脂肪細胞が脂肪を貯めこんで炎症を起こす）が増悪する。また、Spred2はがん細胞の上皮間葉転換：EMTもダウンレギュレーションする役割を担っているので、KOマウスではがんの転移・浸潤能、幹細胞性stemnessに影響を与える。',
    },
    {
      term: ['Alzheimers disease', 'アルツハイマー病', 'アデュカヌマブ'],
      explanation:
        'アルツハイマー病は神経炎症が原因で、アミロイドβに対する抗体医薬（抗アミロイドβ抗体）：アデュカヌマブがアメリカで承認されている。抗体はBBBを通過できないが、BBBに発現するレセプターに対応する構造をアデュカヌマブは保有しているため、BBBを通過することができるといわれている。他に代わる薬が存在しないため承認されたが、アルツハイマー病（や認知症）に有効かどうかははっきりしておらず、日本では認可が下りなかった。エーザイは水溶性のアミロイドβを標的としたレカネマブを開発し、現在承認申請中である。',
    },
    {
      term: ['esophageal cancer', '食道癌'],
      explanation:
        '胃酸逆流による逆流食道炎が主な原因。手術が大変。慢性炎症にかかわる癌。',
    },
    {
      term: ['CAR-T', 'Chimeric antigen receptor T cell', '次世代養子免疫療法'],
      explanation:
        '患者から採取したT細胞にCAR（強力に活性化したT細胞）を導入し、増幅培養して患者に戻す（輸注する）免疫療法。血球慧眼には著効だが、固形がんには効きにくく、サイトカインストーム・脳浮腫などの副作用があり安全性・コストの面でも課題がある。',
    },
    {
      term: ['ペプチド医薬品', '中分子医薬品'],
      explanation:
        '抗体医薬品（高分子医薬品）は非常に高価で、アスピリンなどの低分子医薬品は範囲が広すぎて副作用が多い。これらの課題を解決するために第三の医薬品としてペプチド医薬品（中分子医薬品）が注目されている。',
    },
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
