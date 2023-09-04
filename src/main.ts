type OnEditEvent = GoogleAppsScript.Events.SheetsOnEdit;

const onEdit = (e: OnEditEvent) => {
  // 監視元のセルを指定
  const sheetName = "シート1";
  const monitoredRange = "A1";

  // 反映先セルを指定
  const targetSheetName = "シート1";
  const targetRange = "B1";

  const sheet = e.source.getSheetByName(sheetName);
  const targetSheet = e.source.getSheetByName(targetSheetName);

  // 編集されたセルが監視対象のセルかどうかを確認
  let editedRange = e.range.getA1Notation();
  if (sheetName === e.source.getSheetName() && editedRange === monitoredRange) {
    // 監視対象のセルが編集された場合、その値を反映先のセルにコピー
    let value = sheet?.getRange(monitoredRange).getValue();
    targetSheet?.getRange(targetRange).setValue(value);
  }
};
