# -*- coding: utf-8 -*-
"""
M01 实验配置模块 - 统一设置字体、图表样式等
学员不需要修改此文件
"""

import matplotlib.pyplot as plt

# ============ 中文字体配置 ============
# 配置 matplotlib 支持中文显示
plt.rcParams['font.sans-serif'] = [
    'Microsoft YaHei',  # Windows 微软雅黑
    'SimHei',           # Windows 黑体
    'PingFang SC',      # macOS 苹方
    'Arial Unicode MS', # macOS 备用
    'DejaVu Sans'       # Linux 备用
]
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题

# ============ 图表样式配置 ============
# 统一的图表风格
CHART_STYLE = {
    'figsize': (10, 6),           # 图表大小
    'dpi': 150,                    # 分辨率
    'colors': {                    # 配色方案
        'primary': '#4472C4',      # 主色（蓝色）
        'secondary': '#A0C4E8',    # 辅色（浅蓝）
        'success': '#70AD47',      # 成功（绿色）
        'warning': '#FFC000',      # 警告（黄色）
        'danger': '#E74C3C',       # 危险（红色）
    },
    'font_title': {'size': 14, 'weight': 'bold'},
    'font_label': {'size': 11},
    'grid_alpha': 0.3,
}

# ============ Word 文档配置 ============
# 统一的文档样式
DOC_STYLE = {
    'font_name': '微软雅黑',       # 中文字体
    'font_name_en': 'Arial',      # 英文字体
    'font_size_title': 24,        # 标题字号
    'font_size_heading': 16,      # 一级标题
    'font_size_body': 12,         # 正文字号
    'line_spacing': 1.5,          # 行间距
    'margin_top': 2.54,           # 上边距（cm）
    'margin_bottom': 2.54,        # 下边距
    'margin_left': 3.17,          # 左边距
    'margin_right': 3.17,         # 右边距
}

# ============ 辅助函数 ============
def apply_chart_style(ax, title, xlabel=None, ylabel=None):
    """应用统一的图表样式"""
    ax.set_title(title, **CHART_STYLE['font_title'])
    if xlabel:
        ax.set_xlabel(xlabel, **CHART_STYLE['font_label'])
    if ylabel:
        ax.set_ylabel(ylabel, **CHART_STYLE['font_label'])
    ax.grid(axis='y', alpha=CHART_STYLE['grid_alpha'])
    ax.set_axisbelow(True)  # 网格线在图表下方
