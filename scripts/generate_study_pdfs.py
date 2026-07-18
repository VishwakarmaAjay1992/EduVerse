#!/usr/bin/env python3
"""Generate the printable PDF resources linked from the EduVerse Learning Hub."""

from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageBreak, PageTemplate, Paragraph, Spacer, Table, TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "downloads"
OUT.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#0f172a")
BLUE = colors.HexColor("#0284c7")
LIGHT = colors.HexColor("#e0f2fe")
MUTED = colors.HexColor("#475569")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Cover", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=27, leading=32, textColor=NAVY, alignment=TA_CENTER, spaceAfter=14))
styles.add(ParagraphStyle(name="Sub", parent=styles["Normal"], fontSize=11, leading=17, textColor=MUTED, alignment=TA_CENTER))
styles.add(ParagraphStyle(name="H1x", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=20, leading=24, textColor=NAVY, spaceAfter=10))
styles.add(ParagraphStyle(name="H2x", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=13, leading=17, textColor=BLUE, spaceBefore=8, spaceAfter=5))
styles.add(ParagraphStyle(name="Bodyx", parent=styles["BodyText"], fontSize=9.5, leading=14, textColor=NAVY))
styles.add(ParagraphStyle(name="Smallx", parent=styles["BodyText"], fontSize=8, leading=11, textColor=MUTED))


def decorate(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, A4[1] - 13 * mm, A4[0], 13 * mm, fill=1, stroke=0)
    canvas.setFillColor(colors.white)
    canvas.setFont("Helvetica-Bold", 8)
    canvas.drawString(18 * mm, A4[1] - 8.5 * mm, "EDUVERSE LEARNING HUB")
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 8)
    canvas.drawRightString(A4[0] - 18 * mm, 10 * mm, f"Page {doc.page}")
    canvas.restoreState()


def make_doc(filename):
    doc = BaseDocTemplate(str(OUT / filename), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=21 * mm, bottomMargin=17 * mm)
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
    doc.addPageTemplates(PageTemplate(id="eduverse", frames=[frame], onPage=decorate))
    return doc


def cover(title, subtitle, details):
    return [Spacer(1, 40 * mm), Paragraph(title, styles["Cover"]), Paragraph(subtitle, styles["Sub"]), Spacer(1, 12 * mm), Table([[Paragraph(details, styles["Bodyx"])]], colWidths=[155 * mm], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), LIGHT), ("BOX", (0, 0), (-1, -1), 0.8, BLUE), ("LEFTPADDING", (0, 0), (-1, -1), 12), ("RIGHTPADDING", (0, 0), (-1, -1), 12), ("TOPPADDING", (0, 0), (-1, -1), 12), ("BOTTOMPADDING", (0, 0), (-1, -1), 12)])), Spacer(1, 55 * mm), Paragraph("Clear explanations - consistent SI units - ready to print", styles["Sub"])]


def formula_pdf():
    doc = make_doc("eduverse-physics-formula-sheet.pdf")
    story = cover("Physics Formula and Units Sheet", "Mechanics, matter, waves and electricity", "Use this sheet for revision and problem solving. Always write the known values with units, choose the relationship, substitute, calculate, and check whether the result is reasonable.")
    story += [PageBreak(), Paragraph("Mechanics and matter", styles["H1x"])]
    rows = [["Relationship", "Equation", "SI result"], ["Speed", "v = d / t", "m/s"], ["Acceleration", "a = change in v / t", "m/s^2"], ["Force", "F = ma", "N"], ["Weight near Earth", "W = mg", "N"], ["Momentum", "p = mv", "kg m/s"], ["Kinetic energy", "Ek = 1/2 mv^2", "J"], ["Potential energy", "Ep = mgh", "J"], ["Work", "W = Fs (parallel force)", "J"], ["Power", "P = E / t", "W"], ["Density", "rho = m / V", "kg/m^3"], ["Pressure", "p = F / A", "Pa"]]
    table = Table(rows, colWidths=[58 * mm, 65 * mm, 30 * mm], repeatRows=1)
    table.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, 0), NAVY), ("TEXTCOLOR", (0, 0), (-1, 0), colors.white), ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#cbd5e1")), ("FONT", (0, 0), (-1, 0), "Helvetica-Bold"), ("FONTSIZE", (0, 0), (-1, -1), 8.5), ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f8fafc")]), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6)]))
    story += [table, Spacer(1, 8 * mm), Paragraph("Useful constants", styles["H2x"]), Paragraph("Near Earth's surface, g is commonly approximated as 9.81 m/s^2. Use the value specified by the question when one is provided.", styles["Bodyx"])]
    story += [PageBreak(), Paragraph("Waves and electricity", styles["H1x"])]
    rows2 = [["Relationship", "Equation", "SI result"], ["Wave speed", "v = f lambda", "m/s"], ["Frequency and period", "f = 1 / T", "Hz"], ["Ohm's law", "V = IR", "V"], ["Electrical power", "P = VI", "W"], ["Electrical energy", "E = Pt", "J"], ["Charge flow", "Q = It", "C"]]
    t2 = Table(rows2, colWidths=[58 * mm, 65 * mm, 30 * mm], repeatRows=1)
    t2.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, 0), NAVY), ("TEXTCOLOR", (0, 0), (-1, 0), colors.white), ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#cbd5e1")), ("FONT", (0, 0), (-1, 0), "Helvetica-Bold"), ("FONTSIZE", (0, 0), (-1, -1), 8.5), ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f8fafc")]), ("TOPPADDING", (0, 0), (-1, -1), 7), ("BOTTOMPADDING", (0, 0), (-1, -1), 7)]))
    story += [t2, Spacer(1, 8 * mm), Paragraph("Unit checklist", styles["H2x"]), Paragraph("Convert all values into compatible units before substitution. A correct-looking number with an incompatible unit is not a correct scientific result.", styles["Bodyx"]), Spacer(1, 7 * mm), Paragraph("Common prefixes", styles["H2x"]), Paragraph("kilo (k) = 10^3; mega (M) = 10^6; milli (m) = 10^-3; micro = 10^-6; nano (n) = 10^-9.", styles["Bodyx"])]
    doc.build(story)


def ruled_rows(count=7):
    return Table([[""] for _ in range(count)], colWidths=[160 * mm], rowHeights=[12 * mm] * count, style=TableStyle([("LINEBELOW", (0, 0), (-1, -1), 0.4, colors.HexColor("#94a3b8"))]))


def experiment_pdf():
    doc = make_doc("eduverse-experiment-planner.pdf")
    story = cover("Safe Experiment Planner", "Plan, observe, measure and evaluate", "This four-page workbook guides a fair test from question and risk assessment through results, conclusion and evaluation. Use adult supervision whenever an activity requires it.")
    story += [PageBreak(), Paragraph("1. Question and planning", styles["H1x"]), Paragraph("Investigation question", styles["H2x"]), ruled_rows(3), Paragraph("Prediction and scientific reason", styles["H2x"]), ruled_rows(4), Paragraph("Variables", styles["H2x"])]
    v = Table([["Independent - what I change", "Dependent - what I measure", "Controlled - what I keep the same"], ["", "", ""]], colWidths=[53 * mm] * 3, rowHeights=[10 * mm, 32 * mm])
    v.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, 0), LIGHT), ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#94a3b8")), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("FONTSIZE", (0, 0), (-1, -1), 8), ("FONT", (0, 0), (-1, 0), "Helvetica-Bold")]))
    story += [v, PageBreak(), Paragraph("2. Safety and method", styles["H1x"]), Paragraph("Risk assessment", styles["H2x"])]
    risk = Table([["Hazard", "Possible harm", "Control measure"], ["", "", ""], ["", "", ""], ["", "", ""]], colWidths=[53 * mm] * 3, rowHeights=[9 * mm, 20 * mm, 20 * mm, 20 * mm])
    risk.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, 0), LIGHT), ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#94a3b8")), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("FONTSIZE", (0, 0), (-1, -1), 8), ("FONT", (0, 0), (-1, 0), "Helvetica-Bold")]))
    story += [risk, Paragraph("Numbered method", styles["H2x"]), ruled_rows(6), PageBreak(), Paragraph("3. Results and evaluation", styles["H1x"]), Paragraph("Results table - include headings and units", styles["H2x"])]
    results = Table([["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]], colWidths=[40 * mm] * 4, rowHeights=[12 * mm] * 6)
    results.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, 0), LIGHT), ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#94a3b8"))]))
    story += [results, Paragraph("Conclusion supported by evidence", styles["H2x"]), ruled_rows(4), Paragraph("Limitations and improvements", styles["H2x"]), ruled_rows(3)]
    doc.build(story)


def phenomena_pdf():
    doc = make_doc("eduverse-phenomena-revision-pack.pdf")
    story = cover("Natural Phenomena Revision Pack", "Observation, mechanism, myth and evidence", "Review fifteen representative phenomena from light, atmosphere, water, sound, matter, electricity and space. Answers are separated at the end for independent practice.")
    groups = [
        ("Light and atmosphere", [("Rainbow", "Refraction, dispersion and internal reflection in water droplets."), ("Blue sky", "Shorter visible wavelengths are scattered strongly by air molecules."), ("Mirage", "Light curves through air layers with different temperatures and refractive indices.")]),
        ("Water and weather", [("Clouds", "Tiny droplets or ice crystals have low settling speeds and are supported by air motion."), ("Dew", "Water vapour condenses when a surface cools below the dew point."), ("Top-down freezing", "Water is densest near 4 C; ice is less dense and floats.")]),
        ("Sound and electricity", [("Echo", "Reflected sound returns after a measurable delay."), ("Balloon attraction", "Transferred charge polarizes a nearby neutral surface."), ("Lightning and thunder", "Light reaches us far sooner than the associated sound.")]),
    ]
    for page, (title, entries) in enumerate(groups, 2):
        story += [PageBreak(), Paragraph(title, styles["H1x"])]
        for name, mechanism in entries:
            story += [Paragraph(name, styles["H2x"]), Paragraph(f"Mechanism: {mechanism}", styles["Bodyx"]), Paragraph("Your observation, diagram or example:", styles["Smallx"]), ruled_rows(2), Spacer(1, 3 * mm)]
    story += [PageBreak(), Paragraph("Knowledge check", styles["H1x"])]
    questions = ["1. Why is a rainbow not located at one fixed physical position?", "2. Why does the Sun appear redder near the horizon?", "3. Why can a lake remain liquid beneath surface ice?", "4. Why does a rubbed balloon attract a neutral wall?", "5. What information can be estimated from the delay between lightning and thunder?", "6. State one condition that can change the boiling temperature of water."]
    for q in questions: story += [Paragraph(q, styles["Bodyx"]), ruled_rows(2), Spacer(1, 2 * mm)]
    story += [PageBreak(), Paragraph("Answers and explanations", styles["H1x"])]
    answers = ["1. The bow depends on the observer, Sun and a particular set of droplets at the required angles.", "2. The longer atmospheric path scatters more shorter-wavelength light out of the direct beam.", "3. Floating ice insulates the water, and the density behaviour of water limits overturning below about 4 C.", "4. The electric field rearranges charge slightly in the wall, bringing opposite charge closer on average.", "5. With an approximate sound speed, the delay provides an estimate of distance to the lightning.", "6. Surrounding pressure, altitude and dissolved substances can change the boiling temperature."]
    for a in answers: story += [Paragraph(a, styles["Bodyx"]), Spacer(1, 5 * mm)]
    story += [Paragraph("Source guidance", styles["H2x"]), Paragraph("For deeper review, use the cited NASA, NOAA, NIST, Institute of Physics and university sources linked on the corresponding EduVerse pages.", styles["Smallx"])]
    doc.build(story)


if __name__ == "__main__":
    formula_pdf()
    experiment_pdf()
    phenomena_pdf()
    print(f"Created PDFs in {OUT}")
