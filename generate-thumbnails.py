import fitz  # PyMuPDF
import os

SOURCE_DIR = "public/images/certificates"
OUTPUT_DIR = "public/images/certificate-thumbs"

os.makedirs(OUTPUT_DIR, exist_ok=True)

for filename in os.listdir(SOURCE_DIR):
    if filename.lower().endswith(".pdf"):
        path = os.path.join(SOURCE_DIR, filename)
        doc = fitz.open(path)
        page = doc[0]
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # 2x scale for sharpness
        out_name = os.path.splitext(filename)[0] + ".jpg"
        out_path = os.path.join(OUTPUT_DIR, out_name)
        pix.save(out_path)
        print(f"Saved: {out_path}")
        doc.close()

print("Done.")