// PPTX Generator for OpenCode
// 使用 pptxgenjs 库创建 PowerPoint 演示文稿

const pptxgen = require("pptxgenjs");

// 创建演示文稿
function createPresentation(title, author = "IT Project Team") {
  let pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.author = author;
  pres.title = title;
  return pres;
}

// 添加封面页
function addTitleSlide(pres, title, subtitle, date) {
  let slide = pres.addSlide();
  
  // 背景色（深蓝色）
  slide.background = { color: "1E2761" };
  
  // 标题
  slide.addText(title, {
    x: 0.5, y: 1.5, w: 9, h: 1.5,
    fontSize: 40, fontFace: "微软雅黑", color: "FFFFFF", bold: true, align: "center"
  });
  
  // 副标题
  slide.addText(subtitle, {
    x: 0.5, y: 3, w: 9, h: 0.8,
    fontSize: 24, fontFace: "微软雅黑", color: "CADCFC", align: "center"
  });
  
  // 日期
  slide.addText(date, {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fontSize: 16, fontFace: "微软雅黑", color: "CADCFC", align: "center"
  });
  
  return slide;
}

// 添加内容页（标题 + 要点）
function addContentSlide(pres, title, bullets, notes = "") {
  let slide = pres.addSlide();
  
  // 标题
  slide.addText(title, {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "微软雅黑", color: "1E2761", bold: true
  });
  
  // 要点列表
  if (bullets && bullets.length > 0) {
    let bulletObjects = bullets.map(text => ({
      text: text,
      options: { bullet: true, breakLine: true, fontSize: 18, fontFace: "微软雅黑", color: "363636" }
    }));
    
    slide.addText(bulletObjects, {
      x: 0.5, y: 1.2, w: 9, h: 4
    });
  }
  
  // 演讲备注
  if (notes) {
    slide.addNotes(notes);
  }
  
  return slide;
}

// 添加两列内容页
function addTwoColumnSlide(pres, title, leftTitle, leftBullets, rightTitle, rightBullets) {
  let slide = pres.addSlide();
  
  // 标题
  slide.addText(title, {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "微软雅黑", color: "1E2761", bold: true
  });
  
  // 左列标题
  slide.addText(leftTitle, {
    x: 0.5, y: 1, w: 4.2, h: 0.4,
    fontSize: 20, fontFace: "微软雅黑", color: "065A82", bold: true
  });
  
  // 左列内容
  if (leftBullets && leftBullets.length > 0) {
    let leftObjects = leftBullets.map(text => ({
      text: text,
      options: { bullet: true, breakLine: true, fontSize: 16, fontFace: "微软雅黑", color: "363636" }
    }));
    slide.addText(leftObjects, { x: 0.5, y: 1.5, w: 4.2, h: 3.5 });
  }
  
  // 右列标题
  slide.addText(rightTitle, {
    x: 5, y: 1, w: 4.2, h: 0.4,
    fontSize: 20, fontFace: "微软雅黑", color: "065A82", bold: true
  });
  
  // 右列内容
  if (rightBullets && rightBullets.length > 0) {
    let rightObjects = rightBullets.map(text => ({
      text: text,
      options: { bullet: true, breakLine: true, fontSize: 16, fontFace: "微软雅黑", color: "363636" }
    }));
    slide.addText(rightObjects, { x: 5, y: 1.5, w: 4.2, h: 3.5 });
  }
  
  return slide;
}

// 添加表格页
function addTableSlide(pres, title, headers, rows, notes = "") {
  let slide = pres.addSlide();
  
  // 标题
  slide.addText(title, {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "微软雅黑", color: "1E2761", bold: true
  });
  
  // 表格数据
  let tableData = [headers.map(h => ({ text: h, options: { bold: true, color: "FFFFFF", fill: { color: "065A82" } } }))];
  
  rows.forEach(row => {
    tableData.push(row.map(cell => ({ text: cell, options: { color: "363636" } })));
  });
  
  // 添加表格
  slide.addTable(tableData, {
    x: 0.5, y: 1, w: 9, h: 4,
    fontSize: 14, fontFace: "微软雅黑",
    colW: headers.map(() => 9 / headers.length)
  });
  
  // 演讲备注
  if (notes) {
    slide.addNotes(notes);
  }
  
  return slide;
}

// 保存演示文稿
async function savePresentation(pres, filename) {
  try {
    await pres.writeFile({ fileName: filename });
    console.log(`PPT 已保存：${filename}`);
    return true;
  } catch (error) {
    console.error(`保存失败：${error.message}`);
    return false;
  }
}

// 导出函数
module.exports = {
  createPresentation,
  addTitleSlide,
  addContentSlide,
  addTwoColumnSlide,
  addTableSlide,
  savePresentation
};
