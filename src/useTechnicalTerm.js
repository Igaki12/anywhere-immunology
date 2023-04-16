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
      term: ['サイトカイン', 'cytokine'],
      explanation:
        '細胞が産生する微量生理活性タンパク質の総称。100種類以上存在する。IFN、TNF、ILなど、機能は多岐にわたる。それぞれの名称に付いている数字は分子の同定順で、分子の機能と関連性があるわけではなく、また１つのサイトカインに複数の名称があり、複雑なネットワーク→サイトカインネットワークを形成している点が難しい。サイトカインの閾値thresholdはpg ~ ngオーダーであり、きわめて低量で、また特異的な受容体をもつ細胞だけに効果を発揮する。',
    },
    {
      term: ['インターロイキン', 'interleukin'],
      explanation: '白血球相互の作動物質',
    },
    {
      term: ['Toll-like Receptor', 'TLR'],
      explanation:
        '最も有名なパターン認識レセプターPRRで、PRRの代表格樹状細胞・マクロファージ・B細胞のような抗原提示細胞だけでなく、特定のT細胞や非免疫性細胞にも見られる。現在ヒトでは10種類同定されている。グラム陽性菌(TLR2)・グラム陰性菌(TLR4)・ウイルス(TLR3,7)などによって種類が異なる',
    },
    {
      term: ['LPS', 'リポポリサッカライド', 'Lipopolysaccharide'],
      explanation:
        'グラム陰性細菌の外膜成分として存在し、エンドトキシンの本体である。',
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
      term: ['サイトカインストーム'],
      explanation:
        '感染症や薬剤投与などの原因により、血中サイトカイン（炎症性サイトカイン:IL-1,IL-6,TNF-αなど）の異常上昇が起こり、その作用が全身に及ぶ結果、敗血症性ショックを引き起こす。',
    },
    {
      term: ['SIRS', 'systemic inflammatory response syndrome'],
      explanation:
        'サイト菌を中心とした免疫-炎症反応による非特異的な全身生体反応。',
    },
    {
      term: ['DAMP', 'Damage-Associated Molecular Patterns'],
      explanation:
        '損傷組織または壊死に向かっている細胞から放出される分子機構。PAMPs（病原体由来）とは区別される。',
    },
    {
      term: ['インターフェロン', 'IFN'],
      explanation:
        'インターフェロンはおよそ3種類存在し、Ⅰ型(IFN-α/IFN-β)とⅡ型(IFN-γ)に分類される。Ⅰ型は細胞を抗ウイルス状態にする/感染細胞がT細胞に傷害されやすいようにする作用をもち、Ⅱ型は免疫活性化や殺菌作用に働く遺伝子発現を誘導する。',
    },
    {
      term: ['ケモカイン', 'chemokine', 'CXCL', 'CCL'],
      explanation:
        '白血球遊走に関わるサイトカイン。4つのタイプに構造的にわかれる。後にIL-8として命名される。様々な白血球がケモカインに受容体を持っていて、走化性を示す。ケモカイン受容体はGPCR(7回膜貫通型)を介してシグナル伝達される。白血球の局所浸潤だけでなく、リンパ球の二次リンパ組織へのホーミングにも必須で、臓器特異的ケモカインはT細胞とB細胞の局在化にも利用されている。ケモカイン受容体の異常により白血球の分布が乱され、HIVなどの感染の要因となる。',
    },
    {
      term: ['共刺激因子', 'Co-stimulatory molecule'],
      explanation:
        '古減の環化を受けていないナイーブT細胞のセレクションには、MHC複合体だけでなく共刺激因子を介した補助シグナルも必要となる。',
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
