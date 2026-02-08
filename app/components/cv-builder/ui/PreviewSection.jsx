'use strict';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 42,
    fontSize: 11,
    fontFamily: 'Helvetica',
    lineHeight: 1.45,
    color: '#1f2933',
  },

  header: {
    marginBottom: 22,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    marginBottom: 10,
    color: '#1f3a8a',
  },

  profession: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4b5563',
    marginBottom: 6,
  },

  contact: {
    fontSize: 10.5,
    color: '#4b5563',
  },

  section: {
    marginTop: 18,
  },

  sectionTitle: {
    fontSize: 12.5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 8,
    paddingBottom: 3,
    borderBottomWidth: 0.8,
    borderBottomColor: '#d1d5db',
    color: '#1f3a8a',
  },

  item: {
    marginBottom: 10,
  },

  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },

  itemTitle: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#111827',
  },

  itemDate: {
    fontSize: 10,
    color: '#6b7280',
  },

  bullet: {
    marginLeft: 12,
    fontSize: 10.5,
    color: '#374151',
    marginBottom: 3,
  },

  skillCategory: {
    marginBottom: 6,
  },

  award: {
    marginBottom: 4,
    fontSize: 10.5,
  },
});

const MyDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>
          {formData?.personal?.name || 
           `${formData?.personal?.firstname || ''} ${formData?.personal?.lastname || ''}`.trim() || 
           'Your Name'}
        </Text>

        {formData?.personal?.profession && (
          <Text style={styles.profession}>
            {formData.personal.profession}
          </Text>
        )}

        <Text style={styles.contact}>
          {[
            formData?.personal?.email,
            formData?.personal?.phone,
            formData?.personal?.address,
            formData?.personal?.linkedin,
          ]
            .filter(Boolean)
            .join(' · ') || 'email@example.com · (000) 000-0000'}
        </Text>
      </View>

      {/* Summary */}
      {formData?.personal?.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text>{formData.personal.summary}</Text>
        </View>
      )}

      {/* Education */}
      {formData?.educations?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>

          {formData.educations.map((edu, index) => (
            <View key={index} style={styles.item}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>
                  {edu.degree} — {edu.institution}
                </Text>
                <Text style={styles.itemDate}>
                  {edu.start} – {edu.endtime}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}

      {/* Experience */}
      {formData?.experiences?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>

          {formData.experiences.map((exp, index) => (
            <View key={index} style={styles.item}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>
                  {exp.position} — {exp.company}
                </Text>
                <Text style={styles.itemDate}>
                  {exp.start} – {exp.endtime}
                </Text>
              </View>

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <View>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <Text key={respIndex} style={styles.bullet}>
                      • {resp.responsability}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Skills */}
      {formData?.skills?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillCategory}>
            {formData.skills.map((skill, index) => (
              <Text key={index}>• {skill.skill || skill}</Text>
            ))}
          </View>
        </View>
      )}

      {/* Awards */}
      {formData?.awards?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Awards & Certifications</Text>
          {formData.awards.map((award, index) => (
            <Text key={index} style={styles.award}>
              • {award.award}
            </Text>
          ))}
        </View>
      )}

      {/* Activities */}
      {formData?.activities?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activities & Volunteering</Text>
          {formData.activities.map((activity, index) => (
            <Text key={index} style={styles.award}>
              • {activity.activity}
            </Text>
          ))}
        </View>
      )}

    </Page>
  </Document>
);

export default MyDocument;