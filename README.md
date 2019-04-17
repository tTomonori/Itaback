# Itaback
![Itaback](./icon/icon.png "Itaback")

### 概要
chromeの拡張機能  
各Webページの背景を指定した画像にする  
背景画像が設定してあるページでは無効

### 使い方
1. 背景画像に設定する画像をbase64エンコード
1. Config.jsのConfig.base64にエンコード結果文字列を代入
1. Config.jsのConfig.opacityに背景画像の透過度を設定
1. chromeに拡張機能として読み込めば完了

windowのバーに表示されるアイコンから有効無効の設定が可能
