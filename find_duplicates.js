import fs from 'fs';

const fileContent = fs.readFileSync('src/data/courses.ts', 'utf8');
const match = fileContent.match(/export const courses: Course\[\] = \[([\s\S]*)\];/);
if (match) {
  const coursesStr = match[1];
  const courseObjects = coursesStr.split(/\n  \{\n/);
  console.log(`Found ${courseObjects.length} course objects.`);
  
  const syllabusMap = {};
  let matchCount = 0;
  const categoryCounts = {};
  
  courseObjects.forEach(objStr => {
    const titleMatch = objStr.match(/title: "(.*)"/);
    const categoryMatch = objStr.match(/category: "(.*)"/);
    const syllabusMatch = objStr.match(/syllabus: \[([\s\S]*)\]/);
    
    if (categoryMatch) {
      const category = categoryMatch[1];
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    }

    if (titleMatch && syllabusMatch) {
      matchCount++;
      const title = titleMatch[1];
      const syllabus = syllabusMatch[1].replace(/\s/g, ''); 
      
      if (syllabusMap[syllabus]) {
        console.log(`POTENTIAL DUPLICATE SYLLABUS: "${title}" and "${syllabusMap[syllabus]}"`);
      } else {
        syllabusMap[syllabus] = title;
      }
    }
  });
  console.log("Category Counts:", categoryCounts);
  console.log(`Processed ${matchCount} syllabuses.`);
}
