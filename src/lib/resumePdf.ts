import { jsPDF } from "jspdf";

type ExperienceItem = { period: string; role: string; company: string; desc: string };
type EducationItem = { period: string; degree: string; school: string; desc: string };
type SkillItem = { category: string; items: string };

const MARGIN = 20;
const PAGE_WIDTH = 210;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const LINE_HEIGHT = 6;
const SECTION_GAP = 10;
const TITLE_SIZE = 22;
const HEADING_SIZE = 14;
const BODY_SIZE = 10;
const SMALL_SIZE = 9;

function addWrappedText(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  fontSize: number,
  lineHeight: number
): number {
  doc.setFontSize(fontSize);
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}

export function generateResumePdf(
  experience: ExperienceItem[],
  education: EducationItem[],
  technicalSkills: SkillItem[],
  achievements: string[]
): void {
  try {
    const doc = new jsPDF();
    let y = MARGIN;

  // Title
  doc.setFontSize(TITLE_SIZE);
  doc.setFont("helvetica", "bold");
  doc.text("Resume", MARGIN, y);
  y += 14;

  // --- Experience ---
  y += SECTION_GAP;
  doc.setFontSize(HEADING_SIZE);
  doc.setFont("helvetica", "bold");
  doc.text("Experience", MARGIN, y);
  y += LINE_HEIGHT + 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(BODY_SIZE);

  for (const exp of experience) {
    if (y > 270) {
      doc.addPage();
      y = MARGIN;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(SMALL_SIZE);
    doc.setTextColor(80);
    doc.text(exp.period, MARGIN, y);
    doc.setTextColor(0);
    y += LINE_HEIGHT;

    doc.setFontSize(BODY_SIZE);
    doc.text(exp.role, MARGIN, y);
    y += LINE_HEIGHT;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100);
    doc.text(exp.company, MARGIN, y);
    doc.setTextColor(0);
    y += LINE_HEIGHT;
    y = addWrappedText(doc, exp.desc, MARGIN, y, CONTENT_WIDTH, SMALL_SIZE, LINE_HEIGHT);
    y += 8;
  }

  // --- Education ---
  y += SECTION_GAP;
  if (y > 250) {
    doc.addPage();
    y = MARGIN;
  }
  doc.setFont("helvetica", "bold");
  doc.setFontSize(HEADING_SIZE);
  doc.text("Education", MARGIN, y);
  y += LINE_HEIGHT + 4;

  doc.setFont("helvetica", "normal");
  for (const edu of education) {
    doc.setFontSize(SMALL_SIZE);
    doc.setTextColor(100);
    doc.text(edu.period, MARGIN, y);
    doc.setTextColor(0);
    y += LINE_HEIGHT;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(BODY_SIZE);
    doc.text(edu.degree, MARGIN, y);
    y += LINE_HEIGHT;
    doc.setFont("helvetica", "normal");
    doc.text(edu.school, MARGIN, y);
    y += LINE_HEIGHT;
    doc.text(edu.desc, MARGIN, y);
    y += 8;
  }

  // --- Technical Skills ---
  y += SECTION_GAP;
  if (y > 250) {
    doc.addPage();
    y = MARGIN;
  }
  doc.setFont("helvetica", "bold");
  doc.setFontSize(HEADING_SIZE);
  doc.text("Technical Skills", MARGIN, y);
  y += LINE_HEIGHT + 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(BODY_SIZE);
  for (const skill of technicalSkills) {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(80);
    doc.text(skill.category + ":", MARGIN, y);
    doc.setTextColor(0);
    doc.setFont("helvetica", "normal");
    y = addWrappedText(doc, skill.items, MARGIN + 4, y, CONTENT_WIDTH - 4, SMALL_SIZE, LINE_HEIGHT);
    y += 4;
  }

  // --- Achievements ---
  y += SECTION_GAP;
  if (y > 250) {
    doc.addPage();
    y = MARGIN;
  }
  doc.setFont("helvetica", "bold");
  doc.setFontSize(HEADING_SIZE);
  doc.text("Achievements", MARGIN, y);
  y += LINE_HEIGHT + 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(SMALL_SIZE);
  for (const item of achievements) {
    y = addWrappedText(doc, "• " + item, MARGIN + 2, y, CONTENT_WIDTH - 4, SMALL_SIZE, LINE_HEIGHT);
    y += 4;
  }

    const blob = doc.output("blob");
    const blobUrl = URL.createObjectURL(blob);
    const dataUrl = doc.output("datauristring");

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = "HIMAKSHI-MANMODE_RESUME.pdf";
    link.rel = "noopener";
    link.style.display = "none";
    document.body.appendChild(link);
    link.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 500);

    window.open(dataUrl, "_blank", "noopener");
  } catch (err) {
    console.error("Failed to generate resume PDF:", err);
  }
}
