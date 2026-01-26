import json

def float_to_int(val):
    return int(round(val * 255))

def rgb_to_hex(r, g, b):
    return "#{:02X}{:02X}{:02X}".format(float_to_int(r), float_to_int(g), float_to_int(b))

def extract_colors(node, colors):
    if "fills" in node:
        for fill in node["fills"]:
            if fill.get("type") == "SOLID" and fill.get("visible", True):
                c = fill["color"]
                hex_val = rgb_to_hex(c["r"], c["g"], c["b"])
                colors.add(hex_val)
    
    if "strokes" in node:
        for stroke in node["strokes"]:
            if stroke.get("type") == "SOLID" and stroke.get("visible", True):
                c = stroke["color"]
                hex_val = rgb_to_hex(c["r"], c["g"], c["b"])
                colors.add(hex_val)
                
    if "children" in node:
        for child in node["children"]:
            extract_colors(child, colors)

try:
    with open("src/tokens/figma_nodes.json", "r") as f:
        data = json.load(f)
        
    unique_colors = set()
    
    # The structure is data["nodes"]["1:2183"]["document"]
    # We can just recurse correctly
    for node_id, content in data.get("nodes", {}).items():
        doc = content.get("document", {})
        extract_colors(doc, unique_colors)
        
    print("Found colors:")
    for c in sorted(list(unique_colors)):
        print(c)
        
except Exception as e:
    print(f"Error: {e}")
