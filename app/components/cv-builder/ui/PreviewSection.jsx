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
  },
});


const MyDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>
          {formData?.personal?.name || 'Your Name'}
        </Text>

        <Text style={styles.contact}>
          {[
            formData?.personal?.email,
            formData?.personal?.phone,
            formData?.personal?.location,
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
      {formData?.education?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>

          {formData.education.map((edu, index) => (
            <View key={index} style={styles.item}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>
                  {edu.degree} — {edu.institution}
                </Text>
                <Text style={styles.itemDate}>
                  {edu.start} – {edu.end}
                </Text>
              </View>

              {edu.details && (
                <Text style={styles.bullet}>• {edu.details}</Text>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Experience */}
      {formData?.experience?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>

          {formData.experience.map((exp, index) => (
            <View key={index} style={styles.item}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemTitle}>
                  {exp.jobTitle} — {exp.company}
                </Text>
                <Text style={styles.itemDate}>
                  {exp.start} – {exp.end}
                </Text>
              </View>

              {exp.details && (
                <Text style={styles.bullet}>• {exp.details}</Text>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Skills */}
      {(formData?.skills?.technical ||
        formData?.skills?.soft ||
        formData?.skills?.languages) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>

          {formData.skills.technical && (
            <Text>Technical: {formData.skills.technical}</Text>
          )}

          {formData.skills.soft && (
            <Text>Soft: {formData.skills.soft}</Text>
          )}

          {formData.skills.languages && (
            <Text>Languages: {formData.skills.languages}</Text>
          )}
        </View>
      )}

    </Page>
  </Document>
);


export default MyDocument;