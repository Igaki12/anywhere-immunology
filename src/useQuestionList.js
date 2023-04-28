import { useState } from 'react'

import TLR from './img/answer/TLR.png'
import TLRpattern from './img/answer/TLRpattern.png'
import RLR from './img/answer/RLR.png'
import LPS from './img/answer/LPS.png'
import invariantChain from './img/answer/invariantChain.png'
import crossPresentation from './img/answer/crossPresentation.png'

// import from './img/answer/.png'

export const useQuestionList = () => {
  const appName = 'anywhere-immunology'
  const jpName = '免疫学'
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '2021本試験',
      groupContents: [
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '炎症の4徴候について、誤っているものを2つ選べ。',
          choices: ['浮腫', '壊死', '発赤', '熱感', '疼痛', '腫脹'],
          answerImg: [],
          answer: '浮腫、壊死',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '原発性免疫不全症候群の特徴について、誤っているものを2つ選べ。',
          choices: [
            'Chediak-Higashi症候群 - 急性転化',
            'Wiskott-Aidrich症候群 - 血小板減少',
            'Digeorge症候群 - 低カルシウム血症',
            'X連鎖無ガンマグロブリン血症 - ATM変異',
            '慢性肉芽腫症 - ペルオキシダーゼ陽性巨大顆粒',
            '毛細血管拡張性運動失調症 - 体幹失調',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'PRRが認識するPAMPsと病原体の組み合わせについて、誤っているものを2つ選べ。',
          choices: [
            'TLR2 - リポポリサッカライドLPS - 大腸菌',
            'TLR5 - フラジェリン - 大腸菌',
            'TLR9 - ペプチドグリカン - 大腸菌',
            'RIG-I  - RNAウイルス - インフルエンザウイルス',
            'Dectin-1 - βグルカン - カンジダ',
            'Mincle - トレハロースジミコール酸TDM - 結核菌',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            'T細胞の胸腺分化について、誤っているものを2つ選べ。',
          choices: [
            'γδT細胞の遺伝子再構成はαβT細胞の遺伝子再構成に先行する',
            '正の選択の後に負の選択が起こる',
            '正の選択は胸腺皮質で、負の選択は胸腺髄質で行われる。',
            '正の選択の際にMHCクラスⅡ分子に提示されたペプチドを認識した細胞はCD9陽性T細胞へと分化する。',
            '正の選択はダブルポジディブ期に起こる',
            'AIRE(Autoimmune regulator)は各全戸応現wお発現することで負の選択に関与している。',
          ],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'について、誤っているものを2つ選べ。',
          choices: ['', '', '', '', '', ''],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence:
            '免疫組織化学染色について、誤っているものを2つ選べ。',
          choices: ['', '', '', '', '', ''],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '移植免疫について、誤っているものを2つ選べ。',
          choices: ['', '', '', '', '', ''],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '自己免疫疾患について、誤っているものを2つ選べ。',
          choices: ['', '', '', '', '', ''],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '免疫寛容について、誤っているものを2つ選べ。',
          choices: ['', '', '', '', '', ''],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: 'サイトカインについて、誤っているものを2つ選べ。',
          choices: ['', '', '', '', '', ''],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '',
          questionImg: [],
          questionSentence: '遺伝子再構成について、誤っているものを2つ選べ。',
          choices: ['', '', '', '', '', ''],
          answerImg: [],
          answer: '',
          commentary: '',
        },

        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: 'について、誤っているものを2つ選べ。',
        //   choices: ['', '', '', '', '', ''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '授業中',
      groupContents: [
        {
          detailInfo: '4/07 N県立医科大学後期入試問題（生物）',
          questionImg: [],
          questionSentence:
            '免疫は大きく、自然免疫と獲得免疫（適応免疫）に分けられる。自然免疫に関わる細胞には、組織中にとどまっている（ 1 ）、があり、主に食作用により微生物を処理する。獲得免疫を担う細胞免疫には、（ 2 ）や（ 3 ）があり、あわせて（ 4 ）という。(2)は主に、（ 5 ）から抗原提示を受けてインターロイキンなどの刺激物質を分泌することで（3）に働きかけ、抗体を分泌する（ 6 ）に分化させる。（2）にはウイルス感染細胞を直接攻撃し破壊するものもいる。獲得免疫のうち、抗体が関与する免疫を（ 7 ）免疫といい、（2）が直接標的細胞を殺すことを（ 8 ）免疫という。',
          answerImg: [],
          answer:
            '1.マクロファージ　2.T細胞　3.B細胞　4.リンパ球　5.樹状細胞　6.形質細胞　7.体液性　8.細胞性　',
          commentary: '',
        },
        {
          detailInfo: '4/07',
          questionImg: [],
          questionSentence: '白血球の正常値は？',
          choices: ['5/μL', '50/μL', '500/μL', '5000/μL', '50000/μL'],
          answerImg: [],
          answer: '5000/μL',
          commentary:
            '正常値は4000~9000個/μL,3000は少なく、10000は多いイメージ',
        },
        {
          detailInfo: '4/07',
          questionImg: [],
          questionSentence:
            '体重65kgの人間の体内には、白血球はどのくらいの数存在しているか？（白血球の正常値は5000個/μL）',
          answerImg: [],
          answer: '250億個',
          commentary: '5000 * 1000000(μL→L) * 5(5Lの血液)',
        },
        {
          detailInfo: '4/07　出席確認',
          questionImg: [],
          questionSentence: '炎症の5徴として正しいのはどちらか',
          choices: ['浮腫', '腫脹'],
          answerImg: [],
          answer: '腫脹',
          commentary:
            '漢字間違いが多い。5徴はほかに熱感heat・発赤redness・疼痛swelling・機能障害dysfunction',
        },
        {
          detailInfo: '4/14　小テスト',
          questionImg: [],
          questionSentence: 'サイトカインの特徴として正しいのはどちらか',
          choices: ['低分子', '高分子'],
          answerImg: [],
          answer: '低分子',
          commentary:
            'サイトカインは低分子（分子量三万前後）の糖たんぱく質(glycoprotein)であり、多くは糖鎖を持つ。きわめて微量で効果を発揮する。',
        },
        {
          detailInfo: '4/14　小テスト',
          questionImg: [],
          questionSentence:
            'サイトカインの主なシグナル伝達経路として正しいのはどちらか',
          choices: ['JAK/STAT', 'Notch'],
          answerImg: [],
          answer: 'JAK/STAT',
          commentary:
            'ほとんどのサイトカイン受容体はⅠ型・Ⅱ型受容体を介して信号を伝達する。これらはJAK/STAT経路によって標的遺伝子の転写を誘導する。JAKファミリーは4種類、STATは7種類存在する。',
        },
        {
          detailInfo: '4/14　小テスト',
          questionImg: [],
          questionSentence: '抑制性サイトカインとして正しいのはどちらか',
          choices: ['IL-6', 'IL-10'],
          answerImg: [],
          answer: 'IL-10',
          commentary:
            '抑制性サイトカインIL-10は、Th2細胞から産生されるTh1抑制因子（その他免疫寛容IgAにも関与する）として同定された。抑制性サイトカインは他にTGF-β（活性化マクロファージや制御性T細胞などが産生する）しか存在しない。炎症性のサイトカインとしてIL-1、TNF、IL-6が挙げられる。',
        },
        {
          detailInfo: '4/14　小テスト',
          questionImg: [],
          questionSentence: '抗原提示能が高いのはどちらか',
          choices: ['マクロファージ', '樹状細胞'],
          answerImg: [],
          answer: '樹状細胞',
          commentary:
            '抗原提示細胞として樹状細胞・マクロファージ・B細胞の3つが存在し、自然免疫と獲得免疫の架け橋を担っているが、その中で最も抗原提示能が高いのは樹状細胞。マクロファージは貪食能（大食細胞とよばれる）・殺菌能が高い。',
        },
        {
          detailInfo: '4/14　小テスト',
          questionImg: [],
          questionSentence:
            'Pattern Recognition Receptor（パターン認識受容体）として正しいのはどちらか',
          choices: ['ACE2 Receptor', 'Toll-like Receptor'],
          answerImg: [TLR],
          answer: 'TLR/Toll-like Receptor',
          commentary: 'TLRは最も有名なPRRで、PRRの代表格である。',
        },
        {
          detailInfo: '4/14　小テスト',
          questionImg: [],
          questionSentence:
            '抗ウイルス作用が高いサイトカインとして正しいのはどちらか',
          choices: ['IFN-α', 'IFN-γ'],
          answerImg: [],
          answer: 'IFN-α',
          commentary: 'Ⅰ型IFNで、細胞を抗ウイルス状態にする。',
        },
        {
          detailInfo: '4/14　小テスト',
          questionImg: [],
          questionSentence: 'ケモカインの定義として正しいのはどちらか',
          choices: [
            '白血球遊走に関わるサイトカイン',
            '白血球活性化に関わるサイトカイン',
          ],
          answerImg: [],
          answer: '白血球遊走に関わるサイトカイン',
          commentary:
            'chemotactic(走化性) + cytokine（サイトカイン）ケモカインは後にIL-8として命名される。',
        },
        {
          detailInfo: '4/14　小テスト',
          questionImg: [],
          questionSentence:
            'Th1細胞が産生するサイトカインとして正しいのはどちらか',
          choices: ['IL-12', 'IFN-γ'],
          answerImg: [],
          answer: 'IFN-γ',
          commentary:
            'ヘルパーT細胞の分化を決定する最も重要な因子はサイトカイン環境。Th0(naive T cell)→Th1...IFN-γを産生し細菌・ウイルスを標的とするヘルパーT細胞への分化にはIL-12が必要。よって、Th1が産生するサイトカインはIFN-γ。他にもTh-4...IL-4などを産生し寄生虫を標的とするヘルパーT細胞への分化にはIL-4が必要で、ヘルパーT細胞の分化誘導にはサイトカインが深くかかわっている。',
        },
        {
          detailInfo: '4/14　小テスト',
          questionImg: [],
          questionSentence:
            '血球とサイトカインの組み合わせで正しいのはどちらか',
          choices: ['赤血球-エリスロポエチン', '好中球-トロンボポエチン'],
          answerImg: [],
          answer: '赤血球-エリスロポエチン',
          commentary:
            'エリスロポエチンは腎臓から産生され赤血球への分化に造血系サイトカイン。トロンボポエチンは肝臓由来の血小板への分化に必要な造血系サイトカイン。G-CSF(Granulocyte colony-stimulating factor)は骨髄の間質形細胞・血管内皮細胞などが産生し好中球への分化に必要な造血系サイトカイン。',
        },
        {
          detailInfo: '4/14　小テスト',
          questionImg: [],
          questionSentence:
            '誤っているサイトカイン-微生物の組み合わせを2つ選べ。',
          choices: [
            'TLR2-肺炎レンサ球菌',
            'TLR3-緑膿菌',
            'TLR4-大腸菌',
            'TLR5-ヘリコバクターピロリ菌',
            'RIG-I - インフルエンザ菌',
            'NOD1-リステリア菌',
          ],
          answer: 'TLR3、RIG-I',
          answerImg: [TLRpattern],
          commentary:
            'ヘリコバクターピロリ菌は鞭毛がある→フラジェリンと結合するので、TLR5の選択肢は正しい。インフルエンザはウイルスなので、RIG-Iとの組み合わせは当たっているが、インフルエンザ菌ではない。その他、大腸菌はグラム陰性菌でTLR4、肺炎連鎖球菌はグラム陽性菌でTLR2。',
        },
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence:
            '血球とサイトカインの組み合わせで正しいのはどれか。3つ選べ',
          choices: [
            '好中球-G-CSF',
            '好酸球-IFNα',
            'Tリンパ球-IL-2',
            '赤血球-エリスロポエチン',
            '血小板-IL-4',
          ],
          answer: '好中球、Tリンパ球、赤血球',
          commentary:
            '好酸球へはIL-5で分化が誘導される。エリスロポエチンは腎臓で産生される。',
        },
        {
          detailInfo: '4/21特別講義',
          questionImg: [],
          questionSentence:
            '炎症の５主徴として誤っているものはどれか？（資料8枚目）',
          answerImg: [],
          choices: ['Redness', 'Swelling', 'Edema', 'Pain', 'Dysfunction'],
          answer: 'Edema',
          commentary: '浮腫Edemaではなく腫脹swelling',
        },
        {
          detailInfo: '4/21特別講義',
          questionImg: [],
          questionSentence:
            'がんの10年生存率として最も適切なのはどれか？（資料80枚目）            ',
          answerImg: [],
          choices: ['約10%', '約20%', '約40%', '約60%', '約80%'],
          answer: '約60%',
          commentary:
            '5年生存率・10年生存率は前立腺がんなら90%以上、乳がんでも80%以上',
        },
        {
          detailInfo: '4/28　小テスト',
          questionImg: [],
          questionSentence:
            '小胞体内でインバリアント鎖が結合しているのは次のどちらか？    ',
          answerImg: [invariantChain],
          choices: ['MHCクラスI分子', 'MHCクラスII分子'],
          answer: 'MHCクラスII分子',
          commentary: '',
        },
        {
          detailInfo: '4/28　小テスト',
          questionImg: [],
          questionSentence:
            'クロスプレゼンテーションによる抗原提示が行われるのはどちらか            ',
          answerImg: [crossPresentation],
          choices: [
            '外来性抗原をCD8T細胞に提示する',
            '内在性抗原をCD8T細胞に提示する',
          ],
          answer: '外来性抗原をCD8T細胞に提示する',
          commentary:
            'その他、パターン認識レセプターによる外来性抗原の取り込みも、断片化されればCD8陽性T細胞に抗原提示することができる',
        },
        {
          detailInfo: '4/28　小テスト',
          questionImg: [],
          questionSentence: '脂質抗原を提示するのは次のどちらでしょうか',
          answerImg: [],
          choices: ['CD1d', 'MICA'],
          answer: 'CD1d',
          commentary:
            'テスト本番でもMHC Class1c　ではなく、CD1dまたはMICAとして解答してほしい',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence:
        //     '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: 'レポート課題',
      groupContents: [
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence:
            '下記の pattern recognition receptor (PRR)のリガンドである pathogen associated molecular pattern (PAMPs)ならびに代表的な病原体を列挙せよ。 (1)TLR2',
          answerImg: [TLR, TLRpattern],
          answer:
            'PAMPs：ペプチドグリカン・リポタイコ酸。代表的な病原体：グラム陽性菌（肺炎球菌・黄色ブドウ球菌・溶連菌・ジフテリア菌など）',
          commentary:
            'ペプチドグリカン・リポタイコ酸はグラム陽性菌の厚い細胞壁特有の物質。グラム陽性菌には外膜はない。',
        },
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence:
            '下記の pattern recognition receptor (PRR)のリガンドである pathogen associated molecular pattern (PAMPs)ならびに代表的な病原体を列挙せよ。 (2)TLR4',
          answerImg: [TLR, LPS],
          answer:
            'PAMPs：LSPなど。代表的な病原体：グラム陰性菌（大腸菌・サルモネラ菌・緑膿菌・淋菌など）',
          commentary:
            'LPSはグラム陰性菌の外膜成分。グラム陰性菌は細胞壁が薄い。',
        },
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence:
            '下記の pattern recognition receptor (PRR)のリガンドである pathogen associated molecular pattern (PAMPs)ならびに代表的な病原体を列挙せよ。 (3)RIG-I like receptor',
          answerImg: [RLR],
          answer:
            'PAMPs：ウイルス由来RNA。代表的な病原体：RNAウイルス（インフルエンザウイルス・コロナウイルス・C型肝炎ウイルスなど）',
          commentary:
            'RLGに受容されることによって、炎症性サイトカインやIFN-β含むⅠ型インターフェロンの分泌が刺激される。',
        },
        {
          detailInfo: '4/14',
          questionImg: [],
          questionSentence: 'サイトカインの定義とその特徴（5つ以上）を述べよ',
          answerImg: [],
          answer:
            '【定義】細胞が産生する微量生理活性タンパク質の総称。【特徴】1.多くは低分子糖たんぱく質である。2.主に産生局所で働く。3.きわめて微量で効果を発揮する。4.細胞表面に発現する特異的な受容体に結合し、効果を発揮する。5.多様な生理活性を持つ。6.異なるサイトカインが同じ活性を示す（重複性）。7.種々のサイトカイン間で相互依存性がある（サイトカインネットワーク）。',
          commentary: '',
        },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
        // {
        //   detailInfo: '',
        //   questionImg: [],
        //   questionSentence: '',
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
    appName,
    jpName,
  }
}
