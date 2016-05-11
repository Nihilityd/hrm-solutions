callback({
  "levelNumber": 41,
  "size": 20,
  "steps": 651,
  "successRatio": 0.7,
  "type": "selection",
  "author": "sniperrifle2004",
  "hash": "ae70a829df5143cfad104001636da056",
  "path": "41-Sorting-Floor-34.714/20.651.selection-sniperrifle2004.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 41-Sorting-Floor - SIZE 20/34 - SPEED 651/714 --\r\n\r\na:\r\n    INBOX   \r\n    JUMPZ    d\r\n    COPYTO   [24]\r\nb:\r\n    BUMPUP   24\r\n    JUMP     a\r\nc:\r\n    COMMENT  0\r\n    COPYFROM [22]\r\n    OUTBOX  \r\n    COPYFROM [24]\r\n    COPYTO   [22]\r\nd:\r\n    COMMENT  2\r\n    BUMPDN   24\r\n    JUMPN    b\r\n    COPYTO   23\r\ne:\r\n    COPYTO   22\r\nf:\r\n    BUMPDN   23\r\n    JUMPN    c\r\n    COPYFROM [22]\r\n    SUB      [23]\r\n    JUMPN    f\r\n    COMMENT  1\r\n    COPYFROM 23\r\n    JUMP     e\r\n\r\n\r\nDEFINE COMMENT 0\r\neJzzY2Bg2Gaj7bnQ+qZ7qNV577tmgTGBRg/T5HRX1VToSExt0O9e/chQYUu+Wdzem9bLDuU6Lzzyy/3u\r\nmjrPwAV1ntbtp7yuZ6l4WaTJuPvE3XE+6g80jiEwcdNsycSajQcSBXcppSw8kpf6+WhI5o/D77KZDjDn\r\n8uyJKGSZa1eaP6W7bMX87rLVB66XO558U/H+OEhvb7dKXkOvYfeZvra1khMUtryaJLajbLrgriULM3Y2\r\nLSraClJzYvLpiT0z1Pvtluj0gvihuzhnO+yctbR3F+tD4938d9/v2TT7+36WuRMOLV6YduDklrkHmA6w\r\n7PtxOHTXwiMg9VXnPJYonH+zLPeC4C6vizx72C7z7Mm4enkD37X5iy1vZOzce3PZIZC6+teraqa+ObmF\r\n5a3YjuMfd+0CiZl96l699uvHJQyjYBQMEwAAz9uT8w;\r\n\r\nDEFINE COMMENT 1\r\neJwzYGBgWB99yneDX2tmoffhoq2eP+pPebk2fwg069wed7U3o7xyAlAJw+TKzKBnXZlBIPbt+rL8uRNP\r\nFGQsC64F8UW3r69atPtEAc/BXzHsx+653jjBb6R66oGS6ilJvX1nmjzaz8xMNL3wNU7j0ppIyxtLrWbf\r\nSjN0vM1mVnFbxp/r9p2MLzf3lcy+taUCZNaeZ6+T9jw7mwdi+z77ZAuiJd+dzQt4x13h/EEvC8Rv/swb\r\nmvmdOZL/h0AZwygYBaOAIgAACWFT6Q;\r\n\r\nDEFINE COMMENT 2\r\neJzzYGBgOKq7LdREzz3BRE9/3VHdmo1AIYZiQxn/ZWbigcx28+LL3LgrDD1cm2XcSybdcf64RMDm7ppi\r\nw127juq2rWUxPLINpD45qq5vfqjdCoPQG+smhZdvlos5uYUlQXVTR+LdNfpJPou+J5ZMEox72fo8+nMj\r\nSP2T0u0zE0p+LfAuZjogXHx5Q0LJt0VMVc098nVKE4/Wpc4wqb+84UPDwiN/634cBqlf1f98xbIp8xdP\r\nmS0xddusq73s0ye17Z5q3f6nm3P2/Japy1+3Tl0+q/PumjN9ybs3T+LZEzO7aCtI34f1m00YtrGZtZ/p\r\ncZlztslj47nMoJSzTkmqp3KKjU58brQ/dr/zxCGliR57+GbO2/z3YNAmo/MM25SvgvQ27Gn/yDAKRsEw\r\nBwDGuITc;\r\n\r\nDEFINE LABEL 22\r\neJxTYWBg+Oiy+oCMu/MycZ/eDqFA9wSD0IbsqPA5TZPC+Wa6hrHvqw3rO3MvYs4x49hzm8xTXZufZhhn\r\nCGQvjtXNL8sXLj449XyJ2I7gsh+HgUYxnGvcPtO2KXI/iB3fmFQOohnau1cndSpsmdXpf3hW59Y9xj3R\r\nc+L6mns6JtzvjJysNHHmtP/zyqbrr2Of7g82gxZg+uLtMxMWH5vsvahyQv8C9f4Hc2Qn189imZs5s3v1\r\nwpmrD8TM/nxUd96rk02LPh8FqWfdKDu5ZGPWtNUbxXb82HRkG++Wmo33toXNk9slMXXRbompq/alzjA7\r\nbLLG7LDCFueDC4/wHHx6WvGQF1jvmstJ5WsuO7RqXNJfp3Fp/47Sy5NPtd58cPbAQ6PzvI/Nz/I+fnUS\r\npE7hvM8i/UfbZ9LKz6NgFBADAKNMjlM;\r\n\r\nDEFINE LABEL 23\r\neJyLZ2BgUFAQMaiU97R9ILMt9IFMV3qwxK3up+Ldq4FSDDHSixdaycxaWik/a2mcwYr5ILEZrnOavF1c\r\nm7/Z/5+3337+4isOj1aJuJzcUuYmtiPGS2xHpd/JLeH+qps2+G2fecqLrQqkpziht0Mt3qzzT8zV3vXR\r\nHkvkYtrWbo8r2no1KXe7UsqRbT5pj1btTpu11Ccta9r/lAv9jxIcWkH6NEuEgktLf9SXlkbP2VUsuGtX\r\ncflmkPiC8uae+MZ3zTWtf2pBfMdand7wOrsVi+vPbeJtfXAWJNa/4HPjkoXbZ+YubFxfNX//Dom5VVdM\r\nF+7f0bV06nKQvOnCm+4gOmfdu2ah9bnb/65dfUB+7YZ90zZ4LGnZbt2etTuimudgXR/PwU2zA/YL7gKp\r\n/XferFP3rHq/+8nFC41O6K/jPym2Q/VU5H7/M15Hq859Ptp0kX1f8JWajfOv/lpw6Ip6/5tr+usKbuzf\r\nsffmysd8134/+XSE677egexbe7afucowCkbBIAAAyuey1Q;\r\n\r\nDEFINE LABEL 24\r\neJzzZ2BgqJTfbFIndSmnW+L/PCCXoVti8cLNJr8WLLT+tijVwXkZSMw04H4nZ/ST9uSoLRUnw1Xy0kO7\r\n0qVDLNL++p8o6PPnrgj3f9Ke4qu/7kPg/h3XQiP3vw6L3A/S9zvTodU9+/RE92zpbQuzZi2VyFvY8K8w\r\np9i7WLSEv8Ksc2vFptnXy4u2gtQ2T/WvnzD5c2Nxf11fcf/8xd8n3F0TOVlrQ/PUR6vWTV8x32jmwak3\r\nZj5pj5nd3PNgzsGp3+Z+XPJtrseLZVM23z/Td+YqyIySjXkBH9ar5H1Y/7nRZqNOr+h2lrmS+x+t4jlo\r\nsubVQctVegc8loDUha3NKX62U7RE70BhIYifeWJb6LaT20ILT3elfztzY13uhe0zn1xmrMm4KlA26fq+\r\nkue3/esb713tZX0wf/HZ+yZrdtw7t4lhFIyCYQAA9bCcCQ;\r\n\r\n"
});