import laptopDash from "@/assets/images/essy-laptop-dash.jpg";
import insight from "@/assets/images/essy-insight.jpg";
import phone from "@/assets/images/essy-phone.jpg";
import slide from "@/assets/images/essy-slide.jpg";
import books from "@/assets/images/essy-books.jpg";
import notes from "@/assets/images/essy-notes.jpg";

// Portfolio placeholders: replace these stories and images as real projects ship.
export const projectEntries = [
  {
    slug: "streamline-dashboard", name: "Streamline Dashboard", year: "2026", role: "Product design",
    body: "A single canvas for revenue ops. Cut daily reporting from 2 hours to 6 minutes without adding a single new tool.",
    image: laptopDash, stat: "38%", statLabel: "faster decision loop", tint: "bg-butter-soft",
    kicker: "Clarity at a glance.", category: "Digital product",
    challenge: "Revenue teams have plenty of numbers and very little time. The important signal gets buried between disconnected reports, filters, and conversations.",
    idea: "Bring the morning decision into one calm workspace. Start with what changed, make the next action obvious, and keep the supporting detail one step away.",
    decisions: ["A focused daily summary before the full data view.", "Shared filters that keep every chart in the same context.", "Quiet colour, clear hierarchy, and room for the numbers to breathe."],
    outcome: "A more deliberate reporting experience, built around the decisions a team needs to make rather than the data it happens to collect."
  },
  {
    slug: "insight-studio", name: "Insight Studio", year: "2025", role: "Web · Analytics",
    body: "A calmer analytics home for a research team who lived in eight tabs at once, rebuilt around one question at a time.",
    image: insight, stat: "4×", statLabel: "less tab switching", tint: "bg-sage-soft",
    kicker: "Less noise. More insight.", category: "Research & systems",
    challenge: "Research only helps when people can find it. Scattered notes and dashboards make useful evidence difficult to connect to everyday product decisions.",
    idea: "Give every research question a home. Pair the evidence with a short interpretation, then show where the team can go deeper.",
    decisions: ["Question-led navigation instead of a wall of reports.", "Source notes kept beside the insight they support.", "Reusable views for recurring research conversations."],
    outcome: "A research workspace that makes knowledge easier to revisit, share, and use."
  },
  {
    slug: "pocket-coach", name: "Pocket Coach", year: "2025", role: "iOS · Wellness",
    body: "A pocket-sized nudge app that helps founders keep one promise a day, with streaks that forgive a missed morning.",
    image: phone, stat: "4.8★", statLabel: "App Store rating", tint: "bg-lavender-soft",
    kicker: "A little progress, daily.", category: "Digital product",
    challenge: "Habit apps can turn a missed day into a reason to quit. The experience needs to encourage consistency without becoming another source of pressure.",
    idea: "Make one small promise the centre of the day. Use gentle reminders, flexible streaks, and a check-in that takes seconds.",
    decisions: ["One daily action instead of an endless habit dashboard.", "A forgiving recovery flow after a missed check-in.", "Warm language and tactile, easy-to-reach controls."],
    outcome: "A softer approach to habit building that leaves space for real life."
  },
  {
    slug: "sage-deck", name: "Sage Deck", year: "2024", role: "Brand · Deck system",
    body: "A deck kit that reads like a magazine and closes like a founder brief — built once, reused across every raise.",
    image: slide, stat: "3 May", statLabel: "launch day", tint: "bg-[#f6f6f6]",
    kicker: "Make the story land.", category: "Brand & storytelling",
    challenge: "A good idea can disappear inside an overcrowded presentation. Founders need a system that helps them tell a clear story without redesigning every slide.",
    idea: "Treat the deck as an editorial sequence: a strong opening, a convincing middle, and a clear invitation to act.",
    decisions: ["A small family of flexible slide compositions.", "Type and spacing that work on a laptop and across a room.", "A narrative checklist built into the template structure."],
    outcome: "A repeatable visual language for turning a complex business into a story someone can remember."
  },
  {
    slug: "margin-reading-room", name: "Margin Reading Room", year: "2026", role: "Editorial · Community",
    body: "A slower corner of the internet for curious readers — save a passage, follow a thread, and leave with a better question.",
    image: books, stat: "12", statLabel: "curated reading trails", tint: "bg-[#eee9df]",
    kicker: "Good ideas deserve margins.", category: "Brand & storytelling",
    challenge: "Reading lists grow faster than we can finish them. Saving a link is easy; remembering why it mattered is harder.",
    idea: "Build a reading room around connected ideas, with short trails that turn a pile of bookmarks into a path worth following.",
    decisions: ["Curated trails that connect essays, books, and questions.", "Personal notes that stay attached to a saved passage.", "An editorial layout with generous margins and quiet interactions."],
    outcome: "A thoughtful reading companion that turns collecting links into developing a point of view."
  },
  {
    slug: "fieldnotes-workspace", name: "Fieldnotes", year: "2026", role: "Product strategy · Tools",
    body: "From a messy notebook to a clear next step. A lightweight workspace for shaping ideas before building them.",
    image: notes, stat: "1", statLabel: "shared product brief", tint: "bg-[#e4ece8]",
    kicker: "Make room for the next idea.", category: "Research & systems",
    challenge: "Early ideas rarely arrive neatly packaged. Notes, questions, and assumptions spread across tools before a team agrees on what to build.",
    idea: "Create a flexible canvas that moves from observation to hypothesis to a small, testable brief.",
    decisions: ["Capture first, organise when the pattern becomes clear.", "Separate evidence from assumptions without adding ceremony.", "A concise brief that carries the thinking into the build."],
    outcome: "A shared starting point for product conversations, with enough structure to move forward and enough freedom to keep exploring."
  }
];
